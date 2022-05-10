import { container } from "tsyringe";

import "../container/providers";


import {
    IAccountsRepository,
    IAccountsTokensRepository
} from "@modules/accounts/repositories";
import {
    AccountsRepository,
    AccountsTokensRepository
} from "@modules/accounts/typeorm/repositories";

import { ILinksRepository } from "@modules/links/repositories";
import { LinksRepository } from "@modules/links/typeorm/repositories";

import { ICategoriesRepository } from "@modules/categories/repositories";
import { CategoriesRepository } from "@modules/categories/typeorm/repositories";


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

container.registerSingleton<ICategoriesRepository>(
    "CategoriesRepository",
    CategoriesRepository
)