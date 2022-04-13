import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteCategoryUseCase } from "./delete-category-use-case";


class DeleteCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { id: account_id } = request.account;

        const { category_id } = request.params;

        const deleteCategoryUseCase = container.resolve(DeleteCategoryUseCase);

        await deleteCategoryUseCase.execute({ account_id, category_id });

        return response.status(204).send()
    }
}

export { DeleteCategoryController }