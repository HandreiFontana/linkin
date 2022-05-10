import { inject, injectable } from "tsyringe";

import { ICreateCategoryDTO } from "@modules/categories/dtos";
import { ICategoriesRepository } from "@modules/categories/repositories";


@injectable()
class CreateCategoryUseCase {

    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) { }

    async execute({ name, accountId }: ICreateCategoryDTO): Promise<void> {
        await this.categoriesRepository.create({ name, accountId })
    }
}

export { CreateCategoryUseCase }