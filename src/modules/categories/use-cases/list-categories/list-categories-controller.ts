import { Request, Response } from 'express'
import { container } from 'tsyringe';

import { ListCategoriesUseCase } from './list-categories-use-case';


class ListCategoriesController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { username } = request.params;

        const listCategoriesUseCase = container.resolve(ListCategoriesUseCase);

        const categories = await listCategoriesUseCase.execute(username);

        return response.status(200).json(categories)
    }
}

export { ListCategoriesController }