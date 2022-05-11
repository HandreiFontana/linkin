import { getRepository, Repository } from "typeorm";

import { ILinksRepository } from "@modules/links/repositories";
import { ICreateLinkDTO } from "@modules/links/dtos";
import { Link } from "@modules/links/typeorm/entities";


class LinksRepository implements ILinksRepository {

    private repository: Repository<Link>;

    constructor() {
        this.repository = getRepository(Link);
    }

    async create({
        id,
        title,
        description,
        url,
        accountId,
        categoryId,
        isPrivate = false,
    }: ICreateLinkDTO): Promise<void> {
        const link = this.repository.create({
            id,
            title,
            description,
            url,
            accountId,
            categoryId,
            isPrivate,
        })

        await this.repository.save(link);
    }

    async list(accountId: string): Promise<Link[]> {
        const links = await this.repository.find()

        return links.filter(link => link.accountId.id === accountId)
    }

    async findById(id: string): Promise<Link> {
        const link = await this.repository.findOne(id);

        return link;
    }

    async delete(link: Link): Promise<void> {
        await this.repository.remove(link)
    }
}

export { LinksRepository }