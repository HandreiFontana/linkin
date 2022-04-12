import { inject, injectable } from "tsyringe";
import { resolve } from "path";
import { v4 as uuidV4 } from "uuid"

import { IAccountsRepository } from "../../repositories/i-accounts-repository";
import { IDateProvider } from "../../../../shared/container/providers/date-provider/i-date-provider";
import { IMailProvider } from "../../../../shared/container/providers/mail-provider/i-mail-provider";
import { IAccountsTokensRepository } from "../../repositories/i-accounts-tokens-repository";

import { AppError } from "../../../../shared/errors/app-errors";


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

        const expires_date = this.dateProvider.addHours(3);

        await this.accountsTokensRepository.create({
            refresh_token: token,
            account_id: account.id,
            expires_date,
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