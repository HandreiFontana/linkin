import { Link } from "../../model/link";
import { ILinksRepository } from "../../repositories/ILinksRepository";


class ListLinksUseCase {
    constructor(private linksRepository: ILinksRepository) { }

    execute(username: string): Link[] {
        const links = this.linksRepository.list(username);

        return links;
    }
}

export { ListLinksUseCase }