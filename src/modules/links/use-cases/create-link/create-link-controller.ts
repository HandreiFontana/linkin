import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateLinkUseCase } from "./create-link-use-case";


class CreateLinkController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { id: accountId } = request.account;

        const { categoryId } = request.params;

        const { title, description, url, isPrivate } = request.body;

        const createLinkUseCase = container.resolve(CreateLinkUseCase)

        const link = await createLinkUseCase.execute({
            title,
            description,
            url,
            categoryId,
            accountId,
            isPrivate
        });

        return response.status(201).json(link);
    }
}

export { CreateLinkController }