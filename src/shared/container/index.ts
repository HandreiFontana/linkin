import { container } from "tsyringe";

import "../container/providers";


import { AccountsRepository } from "../../modules/accounts/typeorm/repositories/AccountsRepository";
import { IAccountsRepository } from "../../modules/accounts/repositories/IAccountsRepository";

import { IAccountsTokensRepository } from "../../modules/accounts/repositories/IAccountsTokensRepository";
import { AccountsTokensRepository } from "../../modules/accounts/typeorm/repositories/AccountsTokensRepository";


container.registerSingleton<IAccountsRepository>(
    "AccountsRepository",
    AccountsRepository
)

container.registerSingleton<IAccountsTokensRepository>(
    "AccountsTokensRepository",
    AccountsTokensRepository
)