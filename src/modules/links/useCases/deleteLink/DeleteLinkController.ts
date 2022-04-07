import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteLinkUseCase } from "./DeleteLinkUseCase";


class DeleteLinkController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { linkId } = request.params;

        const deleteLinkUseCase = container.resolve(DeleteLinkUseCase);

        await deleteLinkUseCase.execute({ linkId })

        return response.status(204).send()
    }
}

export { DeleteLinkController }