import { inject, injectable } from "tsyringe";

import { ICategoriesRepository } from "../../repositories/i-categories-repository";

import { AppError } from "../../../../shared/errors/app-errors";

interface IRequest {
    category_id: string;
    account_id: string
}


@injectable()
class DeleteCategoryUseCase {

    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) { }

    async execute({ category_id, account_id }: IRequest): Promise<void> {
        const category = await this.categoriesRepository.findById(category_id);

        if (!category || (category.account_id !== account_id)) {
            throw new AppError("Unauthorized", 401)
        };

        await this.categoriesRepository.delete(category);
    }
}

export { DeleteCategoryUseCase }