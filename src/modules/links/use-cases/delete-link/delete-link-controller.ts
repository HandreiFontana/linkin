import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteLinkUseCase } from "./delete-link-use-case";


class DeleteLinkController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { linkId } = request.params;

        const { id: account_id } = request.account;

        const deleteLinkUseCase = container.resolve(DeleteLinkUseCase);

        await deleteLinkUseCase.execute({ linkId, account_id })

        return response.status(204).send()
    }
}

export { DeleteLinkController }