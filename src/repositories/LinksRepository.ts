import { Link } from "../model/link";

interface ICreateLinkDTO {
    title: string,
    description: string,
    url: string,
    created_by: string,
    category: string,
    isPrivate: boolean
}

class LinksRepository {

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