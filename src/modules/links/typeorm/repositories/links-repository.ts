import { getRepository, Repository } from "typeorm";

import { ILinksRepository } from "../../repositories/i-links-repository";
import { ICreateLinkDTO } from "../../dtos/i-create-link-dto";

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
        category_id,
        isPrivate = false,
    }: ICreateLinkDTO): Promise<void> {
        const link = this.repository.create({
            id,
            title,
            description,
            url,
            account_id,
            category_id,
            isPrivate,
        })

        await this.repository.save(link);
    }

    async list(account_id: string): Promise<Link[]> {
        const links = await this.repository.find()

        return links.filter(link => link.account_id === account_id)
    }

    async findById(id: string): Promise<Link> {
        console.log(id)
        const link = await this.repository.findOne(id);

        return link;
    }

    async delete(link: Link): Promise<void> {
        await this.repository.remove(link)
    }
}

export { LinksRepository }