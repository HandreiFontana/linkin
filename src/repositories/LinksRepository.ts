import { Link } from "../model/link";

interface ICreateLinkDTO {
    title: string,
    description: string,
    url: string,
    category: string
}

class LinksRepository {

    private links: Link[];

    constructor() {
        this.links = [];
    }

    create({ title, description, url, category }: ICreateLinkDTO) {
        const link = new Link();

        Object.assign(link, {
            title,
            description,
            url,
            category,
            created_at: new Date()
        })

        this.links.push(link);
    }

    list(): Link[] {
        return this.links;
    }
}

export { LinksRepository }