import { inject, injectable } from "tsyringe";
import { sign } from "jsonwebtoken";

import { IAccountsRepository } from "../../repositories/IAccountsRepository";
import { IAccountsTokensRepository } from "../../repositories/IAccountsTokensRepository";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import auth from "../../../../config/auth";

import { AppError } from "../../../../shared/errors/AppErrors";
import { compare } from "bcrypt";


interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    account: {
        username: string,
        email: string,
    },
    token: string,
    refresh_token: string,
}


@injectable()
class AuthenticateAccountUseCase {

    constructor(
        @inject("AccountsRepository")
        private accountsRepository: IAccountsRepository,
        @inject("AccountsTokensRepository")
        private accountsTokensRepository: IAccountsTokensRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider
    ) { }

    async execute({ email, password }: IRequest): Promise<IResponse> {

        const account = await this.accountsRepository.findByEmail(email);

        const {
            expires_in_token,
            secret_refresh_token,
            secret_token,
            expires_in_refresh_token,
            expires_refresh_token_days,
        } = auth;

        if (!account) {
            throw new AppError("Email or password incorrect!")
        };

        const passwordMatch = await compare(password, account.password);

        if (!passwordMatch) {
            throw new AppError("Email or password incorrect!")
        }

        const token = sign({}, secret_token, {
            subject: account.id,
            expiresIn: expires_in_token,
        });

        const refresh_token = sign({ email }, secret_refresh_token, {
            subject: account.id,
            expiresIn: expires_in_refresh_token,
        });

        const refresh_token_expires_date = this.dateProvider.addDays(
            expires_refresh_token_days
        );

        await this.accountsTokensRepository.create({
            account_id: account.id,
            refresh_token,
            expires_date: refresh_token_expires_date
        });

        const tokenReturn: IResponse = {
            token,
            account: {
                username: account.username,
                email: account.email
            },
            refresh_token,
        };

        return tokenReturn;
    }
}

export { AuthenticateAccountUseCase };