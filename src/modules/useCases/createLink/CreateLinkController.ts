import { Request, Response } from "express";
import { CreateLinkUseCase } from "./CreateLinkUseCase";


class CreateLinkController {

    constructor(private createLinkUseCase: CreateLinkUseCase) { }

    handle(request: Request, response: Response): Response {
        const { title, description, url, category, created_by, isPrivate } = request.body;

        this.createLinkUseCase.execute({
            title,
            description,
            url,
            category,
            created_by,
            isPrivate
        });

        return response.status(201).send();
    }
}

export { CreateLinkController }