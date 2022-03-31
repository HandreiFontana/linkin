import { Link } from "../model/link";

import { ICreateLinkDTO } from "../dtos/ICreateLinkDTO";
import { ILinksRepository } from "./ILinksRepository";

class LinksRepository implements ILinksRepository {

    private links: Link[];

    private static INSTANCE: LinksRepository;

    private constructor() {
        this.links = [];
    }

    public static getInstance(): LinksRepository {

        if (!LinksRepository.INSTANCE) {
            LinksRepository.INSTANCE = new LinksRepository();
        }

        return LinksRepository.INSTANCE;
    }

    create({
        title,
        description,
        url,
        created_by,
        category,
        isPrivate = false
    }: ICreateLinkDTO) {
        const link = new Link();

        Object.assign(link, {
            title,
            description,
            url,
            created_by,
            category,
            isPrivate,
            created_at: new Date()
        })

        this.links.push(link);
    }

    list(username: string): Link[] {
        return this.links.filter(link => link.created_by === username)
    }
}

export { LinksRepository }