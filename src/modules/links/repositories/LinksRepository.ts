import { Link } from "../../../model/link";

import { ICreateLinkDTO } from "../dtos/ICreateLinkDTO";
import { ILinksRepository } from "./ILinksRepository";

class LinksRepository implements ILinksRepository {

    private links: Link[];

    constructor() {
        this.links = [];
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

    list(): Link[] {

        return this.links;
    }
}

export { LinksRepository }