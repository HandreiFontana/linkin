import { inject, injectable } from "tsyringe";

import { ILinksRepository } from "../../repositories/ILinksRepository";

import { AppError } from "../../../../shared/errors/AppErrors";

interface IRequest {
    linkId: string;
    account_id: string;
}

@injectable()
class DeleteLinkUseCase {

    constructor(
        @inject("LinksRepository")
        private linksRepository: ILinksRepository
    ) { }

    async execute({ linkId, account_id }: IRequest): Promise<void> {
        const link = await this.linksRepository.findById(linkId);

        if (link.account_id !== account_id) {
            throw new AppError("Unauthorized", 401)
        }

        await this.linksRepository.delete(link)
    }
}

export { DeleteLinkUseCase }