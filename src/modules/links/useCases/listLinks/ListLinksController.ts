import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListLinksUseCase } from "./ListLinksUseCase";


class ListLinksController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { username } = request.params;

        const listLinksUseCase = container.resolve(ListLinksUseCase)

        const accountLinks = await listLinksUseCase.execute(username);

        return response.status(200).json(accountLinks);
    }
}

export { ListLinksController }