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
        console.log(categoryId, accountId);
        const category = await this.categoriesRepository.findById(categoryId);
        console.log(category); // Não traz o accountId

        if (!category || (category.accountId !== accountId)) {
            throw new AppError("Unauthorized", 401)
        };

        await this.categoriesRepository.delete(category);
    }
}

export { DeleteCategoryUseCase }