import { inject, injectable } from "tsyringe";

import { IAccountsRepository } from "../../../accounts/repositories/i-accounts-repository";
import { ILinksRepository } from "../../repositories/i-links-repository";
import { AccountMap } from "../../../accounts/mapper/user-map";

import { Link } from "../../typeorm/entities/link";


@injectable()
class ListLinksUseCase {

    constructor(
        @inject("LinksRepository")
        private linksRepository: ILinksRepository,
        @inject("AccountsRepository")
        private accountsRepository: IAccountsRepository
    ) { }

    async execute(
        username: string,
        account_id: string
    ): Promise<Link[]> {
        const account = await this.accountsRepository.findByUsername(username);

        const accountMapper = AccountMap.toDTO(account);

        const links = await this.linksRepository.list(accountMapper.id);

        if (account.id !== account_id) {
            const linksPublic = links.filter(
                link => link.isPrivate === false
            )

            return linksPublic;
        };

        return links;
    }
}

export { ListLinksUseCase }