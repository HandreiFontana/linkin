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
    refresh_token: string;
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

        const account_id = sub;

        const accountToken = await this.accountsTokensRepository
            .findByAccountIdAndRefreshToken(
                account_id,
                token,
            );

        await this.accountsTokensRepository.deleteById(accountToken.id);

        const refresh_token = sign({ email }, auth.secret_refresh_token, {
            subject: sub,
            expiresIn: auth.expires_in_refresh_token,
        });

        const expires_date = this.dateProvider.addDays(
            auth.expires_refresh_token_days
        )

        await this.accountsTokensRepository.create({
            expires_date,
            refresh_token,
            account_id
        })

        const newToken = sign({}, auth.secret_token, {
            subject: account_id,
            expiresIn: auth.expires_in_token,
        });

        return {
            refresh_token,
            token: newToken
        }
    }
}

export { RefreshTokenUseCase };