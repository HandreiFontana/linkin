import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCategoryUseCase } from "./create-category-use-case";


class CreateCategoryController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { name } = request.body;

        const { id: account_id } = request.account

        const createCategoryUseCase = container.resolve(CreateCategoryUseCase);

        const category = await createCategoryUseCase.execute({ name, account_id });

        return response.status(201).json(category);
    }
}

export { CreateCategoryController }