import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateLinkUseCase } from "./CreateLinkUseCase";


class CreateLinkController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { id: account_id } = request.account;

        const { title, description, url, category, isPrivate } = request.body;

        const createLinkUseCase = container.resolve(CreateLinkUseCase)

        const link = await createLinkUseCase.execute({
            title,
            description,
            url,
            category,
            account_id,
            isPrivate
        });

        return response.status(201).json(link);
    }
}

export { CreateLinkController }