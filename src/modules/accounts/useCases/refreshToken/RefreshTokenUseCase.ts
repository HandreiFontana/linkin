import { sign, verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { IAccountsTokensRepository } from "../../repositories/IAccountsTokensRepository";

import auth from "../../../../config/auth";
import { AppError } from "../../../../shared/errors/AppErrors";


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

        if (!accountToken) {
            throw new AppError("Refresh token does not exists!")
        }

        await this.accountsTokensRepository.deleteById(accountToken.id);

        const refresh_token = sign({ email }, auth.secret_refresh_token, {
            subject: sub,
            expiresIn: auth.expires_in_refresh_token,
        });

        console.log("TESTANDO")

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