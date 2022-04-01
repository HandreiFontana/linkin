import { Link } from "../../entities/link";
import { ILinksRepository } from "../../repositories/ILinksRepository";


class ListLinksUseCase {
    constructor(private linksRepository: ILinksRepository) { }

    execute(username: string): Link[] {
        const links = this.linksRepository.list(username);

        return links;
    }
}

export { ListLinksUseCase }