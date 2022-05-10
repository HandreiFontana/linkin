import { sign, verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IAccountsTokensRepository } from "@modules/accounts/repositories";

import { AppError } from "@shared/errors";
import { IDateProvider } from "@shared/container/providers/date-provider/i-date-provider";

import auth from "@config/auth";


interface IPayload {
    sub: string;
    email: string;
}

interface ITokenResponse {
    token: string;
    refreshToken: string;
}

@injectable()
class RefreshTokenUseCase {
    constructor(
        @inject("AccountsTokensRepository")
        private accountsTokensRepository: IAccountsTokensRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider
    ) { }

    async execute(token: string): Promise<ITokenResponse> {

        const refreshTokenAccount = await this
            .accountsTokensRepository
            .findByRefreshToken(token)

        if (!refreshTokenAccount) {
            throw new AppError("Refresh token does not exists!")
        }

        const { email, sub } = verify(
            token,
            auth.secret_refresh_token,
        ) as IPayload;

        const accountId = sub;

        const accountToken = await this.accountsTokensRepository
            .findByAccountIdAndRefreshToken(
                accountId,
                token,
            );

        await this.accountsTokensRepository.deleteById(accountToken.id);

        const refreshToken = sign({ email }, auth.secret_refresh_token, {
            subject: sub,
            expiresIn: auth.expires_in_refresh_token,
        });

        const expiresDate = this.dateProvider.addDays(
            auth.expires_refresh_token_days
        )

        await this.accountsTokensRepository.create({
            expiresDate,
            refreshToken,
            accountId
        })

        const newToken = sign({}, auth.secret_token, {
            subject: accountId,
            expiresIn: auth.expires_in_token,
        });

        return {
            refreshToken,
            token: newToken
        }
    }
}

export { RefreshTokenUseCase };