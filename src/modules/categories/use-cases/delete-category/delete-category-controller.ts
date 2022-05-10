import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteCategoryUseCase } from "./delete-category-use-case";


class DeleteCategoryController {
    async handle(request: Request, response: Response): Promise<Response> {

        const { id: accountId } = request.account;

        const { categoryId } = request.params;

        const deleteCategoryUseCase = container.resolve(DeleteCategoryUseCase);

        await deleteCategoryUseCase.execute({ accountId, categoryId });

        return response.status(204).send()
    }
}

export { DeleteCategoryController }