import { inject, injectable } from "tsyringe";

import { IAccountsRepository } from "@modules/accounts/repositories";
import { AccountMap } from "@modules/accounts/mapper/user-map";
import { ICategoriesRepository } from "@modules/categories/repositories";
import { Category } from "@modules/categories/typeorm/entities";


@injectable()
class ListCategoriesUseCase {

    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository,
        @inject("AccountsRepository")
        private accountsRepository: IAccountsRepository,
    ) { }

    async execute(username: string): Promise<Category[]> {
        const account = await this.accountsRepository.findByUsername(username);

        const accountMapper = AccountMap.toDTO(account);

        const categories = await this.categoriesRepository.list(accountMapper.id);

        return categories;
    }
}

export { ListCategoriesUseCase }