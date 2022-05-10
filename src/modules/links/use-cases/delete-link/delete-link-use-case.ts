import { inject, injectable } from "tsyringe";

import { ILinksRepository } from "@modules/links/repositories";

import { AppError } from "@shared/errors";


interface IRequest {
    linkId: string;
    accountId: string;
}

@injectable()
class DeleteLinkUseCase {

    constructor(
        @inject("LinksRepository")
        private linksRepository: ILinksRepository
    ) { }

    async execute({ linkId, accountId }: IRequest): Promise<void> {
        const link = await this.linksRepository.findById(linkId);

        if (!link || (link.accountId !== accountId)) {
            throw new AppError("Unauthorized", 401)
        }

        await this.linksRepository.delete(link)
    }
}

export { DeleteLinkUseCase }