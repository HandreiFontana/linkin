import { inject, injectable } from "tsyringe";

import { ILinksRepository } from "../../repositories/i-links-repository";

import { AppError } from "../../../../shared/errors/app-errors";


interface IRequest {
    link_id: string;
    account_id: string;
}

@injectable()
class DeleteLinkUseCase {

    constructor(
        @inject("LinksRepository")
        private linksRepository: ILinksRepository
    ) { }

    async execute({ link_id, account_id }: IRequest): Promise<void> {
        const link = await this.linksRepository.findById(link_id);

        if (!link || (link.account_id !== account_id)) {
            throw new AppError("Unauthorized", 401)
        }

        await this.linksRepository.delete(link)
    }
}

export { DeleteLinkUseCase }