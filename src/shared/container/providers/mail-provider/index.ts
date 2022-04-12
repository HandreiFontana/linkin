import { container } from "tsyringe";

import { IMailProvider } from "./i-mail-provider";
import { EtherealMailProvider } from "./implementations/ethereal-mail-provider";
import { SESMailProvider } from "./implementations/ses-mail-provider";

const mailProvider = {
    ethereal: container.resolve(EtherealMailProvider),
    ses: container.resolve(SESMailProvider),
}


container.registerInstance<IMailProvider>(
    "MailProvider",
    mailProvider[process.env.MAIL_PROVIDER]
)