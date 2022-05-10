import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteLinkUseCase } from "./delete-link-use-case";


class DeleteLinkController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { linkId } = request.params;

        const { id: accountId } = request.account;

        const deleteLinkUseCase = container.resolve(DeleteLinkUseCase);

        await deleteLinkUseCase.execute({ linkId, accountId })

        return response.status(204).send()
    }
}

export { DeleteLinkController }