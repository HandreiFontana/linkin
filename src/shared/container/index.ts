import { container } from "tsyringe";

import "../container/providers";


import { IAccountsRepository } from "../../modules/accounts/repositories/i-accounts-repository";
import { AccountsRepository } from "../../modules/accounts/typeorm/repositories/accounts-repository";

import { IAccountsTokensRepository } from "../../modules/accounts/repositories/i-accounts-tokens-repository";
import { AccountsTokensRepository } from "../../modules/accounts/typeorm/repositories/accounts-tokens-repository";

import { ILinksRepository } from "../../modules/links/repositories/i-links-repository";
import { LinksRepository } from "../../modules/links/typeorm/repositories/links-repository";


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