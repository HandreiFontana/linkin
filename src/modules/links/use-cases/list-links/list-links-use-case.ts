import { inject, injectable } from "tsyringe";

import { IAccountsRepository } from "@modules/accounts/repositories";
import { AccountMap } from "@modules/accounts/mapper/user-map";
import { ILinksRepository } from "@modules/links/repositories";
import { Link } from "@modules/links/typeorm/entities/link";

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
        accountId: string
    ): Promise<Link[]> {
        const account = await this.accountsRepository.findByUsername(username);

        const accountMapper = AccountMap.toDTO(account);

        const links = await this.linksRepository.list(accountMapper.id);

        if (account.id !== accountId) {
            const linksPublic = links.filter(
                link => link.isPrivate === false
            )

            return linksPublic;
        };

        return links;
    }
}

export { ListLinksUseCase }