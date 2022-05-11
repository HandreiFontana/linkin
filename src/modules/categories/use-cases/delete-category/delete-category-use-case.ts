import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "@modules/categories/repositories";

import { AppError } from "@shared/errors";


interface IRequest {
    categoryId: string;
    accountId: string
}


@injectable()
class DeleteCategoryUseCase {

    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) { }

    async execute({ categoryId, accountId }: IRequest): Promise<void> {
        const category = await this.categoriesRepository.findById(categoryId);

        if (!category || (category.accountId.id !== accountId)) {
            throw new AppError("Unauthorized", 401)
        };

        await this.categoriesRepository.delete(category);
    }
}

export { DeleteCategoryUseCase }