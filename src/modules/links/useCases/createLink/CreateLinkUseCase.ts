import { inject, injectable } from "tsyringe"

import { ICreateLinkDTO } from "../../dtos/ICreateLinkDTO"
import { ILinksRepository } from "../../repositories/ILinksRepository"


@injectable()
class CreateLinkUseCase {

    constructor(
        @inject("LinksRepository")
        private linksRepository: ILinksRepository
    ) { }

    async execute({
        title,
        description,
        url,
        account_id,
        category,
        isPrivate
    }: ICreateLinkDTO): Promise<void> {
        await this.linksRepository.create({
            title,
            description,
            url,
            account_id,
            category,
            isPrivate
        })
    }

}

export { CreateLinkUseCase }