import { inject, injectable } from "tsyringe";

import { IAccountsRepository } from "../../../accounts/repositories/i-accounts-repository";
import { ILinksRepository } from "../../repositories/i-links-repository";

import { AccountMap } from "../../../accounts/mapper/user-map";
import { Link } from "../../typeorm/entities/link";


@injectable()
class ListCategoriesUseCase {

    constructor(
        @inject("LinksRepository")
        private linksRepository: ILinksRepository,
        @inject("AccountsRepository")
        private accountsRepository: IAccountsRepository
    ) { }

    async execute(username: string): Promise<Link[]> {
        const account = await this.accountsRepository.findByUsername(username);

        const accountMapper = AccountMap.toDTO(account);

        const links = await this.linksRepository.list(accountMapper.id);

        let categories = [];

        links.forEach((link) => {
            const categorieAlreadyExists = categories.find(
                categorie => categorie === link.category
            )

            if (!categorieAlreadyExists) {
                categories.push(link.category)
            }
        });

        return categories;
    }
}

export { ListCategoriesUseCase }