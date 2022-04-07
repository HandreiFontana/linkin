import { inject, injectable } from "tsyringe";

import { ILinksRepository } from "../../repositories/ILinksRepository";

interface IRequest {
    linkId: string;
}

@injectable()
class DeleteLinkUseCase {

    constructor(
        @inject("LinksRepository")
        private linksRepository: ILinksRepository
    ) { }

    async execute({ linkId }: IRequest): Promise<void> {
        const link = await this.linksRepository.findById(linkId);

        await this.linksRepository.delete(link)
    }
}

export { DeleteLinkUseCase }