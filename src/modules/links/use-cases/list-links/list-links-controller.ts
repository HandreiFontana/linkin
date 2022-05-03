import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { ListLinksUseCase } from './list-links-use-case';


class ListLinksController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { username } = request.params;

        const { id: account_id } = request.account;

        const listLinksUseCase = container.resolve(ListLinksUseCase)

        const accountLinks = await listLinksUseCase.execute(
            username,
            account_id
        );

        return response.status(200).json(accountLinks);
    }
}

export { ListLinksController }