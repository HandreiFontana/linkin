import { inject, injectable } from "tsyringe";

import { IAccountsRepository } from "../../../accounts/repositories/i-accounts-repository";
import { ICategoriesRepository } from "../../repositories/i-categories-repository";

import { AccountMap } from "../../../accounts/mapper/user-map";
import { Category } from "../../typeorm/entities/category";


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