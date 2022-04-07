import { getRepository, Repository } from "typeorm";

import { ICreateLinkDTO } from "../../dtos/ICreateLinkDTO";
import { ILinksRepository } from "../../repositories/ILinksRepository";

import { Link } from "../entities/link";


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
        account_id,
        category,
        isPrivate = false,
    }: ICreateLinkDTO): Promise<void> {
        const link = this.repository.create({
            id,
            title,
            description,
            url,
            account_id,
            category,
            isPrivate,
        })

        await this.repository.save(link);
    }

    async list(account_id: string): Promise<Link[]> {
        const links = await this.repository.find()

        return links.filter(link => link.account_id === account_id)
    }
}

export { LinksRepository }