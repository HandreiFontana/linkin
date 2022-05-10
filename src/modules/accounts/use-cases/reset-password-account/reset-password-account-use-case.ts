import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt";

import {
    IAccountsRepository,
    IAccountsTokensRepository
} from "@modules/accounts/repositories";

import { AppError } from "@shared/errors";
import { IDateProvider } from "@shared/container/providers/date-provider/i-date-provider";


interface IRequest {
    token: string,
    password: string,
}


@injectable()
class ResetPasswordAccountUseCase {

    constructor(
        @inject("AccountsRepository")
        private accountsRepository: IAccountsRepository,
        @inject("AccountsTokensRepository")
        private accountsTokensRepository: IAccountsTokensRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider
    ) { }

    async execute({ token, password }: IRequest): Promise<void> {
        const accountToken = await this
            .accountsTokensRepository.
            findByRefreshToken(
                token
            );

        if (!accountToken) {
            throw new AppError("Token Invalid!");
        }

        if (this.dateProvider.compareIfBefore(
            accountToken.expires_date,
            this.dateProvider.dateNow(),
        )) {
            throw new AppError("Token expired!");
        }

        const account = await this
            .accountsRepository
            .findById(
                accountToken.account_id
            )

        account.password = await hash(password, 8);

        await this.accountsRepository.create(account);

        await this.accountsTokensRepository.deleteById(accountToken.id);
    }
}

export { ResetPasswordAccountUseCase }