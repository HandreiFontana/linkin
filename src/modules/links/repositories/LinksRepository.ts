import { getRepository, Repository } from "typeorm";

import { ICreateLinkDTO } from "../dtos/ICreateLinkDTO";
import { Link } from "../typeorm/entities/link";
import { ILinksRepository } from "./ILinksRepository";


class LinksRepository implements ILinksRepository {

    private repository: Repository<Link>;

    constructor() {
        this.repository = getRepository(Link);
    }

    async create({
        title,
        description,
        url,
        created_by,
        category,
        isPrivate = false
    }: ICreateLinkDTO): Promise<void> {
        const link = this.repository.create({
            title,
            description,
            url,
            created_by,
            category,
            isPrivate,
        })

        await this.repository.save(link);
    }

    async list(username: string): Promise<Link[]> {
        const links = await this.repository.find()

        return links.filter(link => link.created_by === username)
    }
}

export { LinksRepository }