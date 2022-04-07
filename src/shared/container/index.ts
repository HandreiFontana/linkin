import { container } from "tsyringe";

import "../container/providers";


import { AccountsRepository } from "../../modules/accounts/typeorm/repositories/AccountsRepository";
import { IAccountsRepository } from "../../modules/accounts/repositories/IAccountsRepository";

import { IAccountsTokensRepository } from "../../modules/accounts/repositories/IAccountsTokensRepository";
import { AccountsTokensRepository } from "../../modules/accounts/typeorm/repositories/AccountsTokensRepository";

import { ILinksRepository } from "../../modules/links/repositories/ILinksRepository";
import { LinksRepository } from "../../modules/links/typeorm/repositories/LinksRepository";


container.registerSingleton<IAccountsRepository>(
    "AccountsRepository",
    AccountsRepository
)

container.registerSingleton<IAccountsTokensRepository>(
    "AccountsTokensRepository",
    AccountsTokensRepository
)

container.registerSingleton<ILinksRepository>(
    "LinksRepository",
    LinksRepository
)