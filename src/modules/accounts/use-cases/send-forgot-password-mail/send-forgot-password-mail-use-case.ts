import { inject, injectable } from "tsyringe";
import { resolve } from "path";
import { v4 as uuidV4 } from "uuid"

import {
    IAccountsRepository,
    IAccountsTokensRepository
} from "@modules/accounts/repositories";

import { AppError } from "@shared/errors";
import { IDateProvider } from "@shared/container/providers/date-provider/i-date-provider";
import { IMailProvider } from "@shared/container/providers/mail-provider/i-mail-provider";


@injectable()
class SendForgotPasswordMailUseCase {

    constructor(
        @inject("AccountsRepository")
        private accountsRepository: IAccountsRepository,
        @inject("AccountsTokensRepository")
        private accountsTokensRepository: IAccountsTokensRepository,
        @inject("DayjsDateProvider")
        private dateProvider: IDateProvider,
        @inject("MailProvider")
        private mailProvider: IMailProvider
    ) { }

    async execute(email: string) {

        const account = await this.accountsRepository.findByEmail(email);

        const templatePath = resolve(
            __dirname,
            "..",
            "..",
            "views",
            "emails",
            "forgot-password.hbs"
        );

        if (!account) {
            throw new AppError("Account does not exists!");
        }

        const token = uuidV4();

        const expiresDate = this.dateProvider.addHours(3);

        await this.accountsTokensRepository.create({
            refreshToken: token,
            accountId: account.id,
            expiresDate,
        });

        const variables = {
            name: account.username,
            link: `${process.env.FORGOT_MAIL_URL}${token}`
        }

        await this.mailProvider.sendMail(
            email,
            "Recuperação de senha",
            variables,
            templatePath,
        );
    }
}

export { SendForgotPasswordMailUseCase }