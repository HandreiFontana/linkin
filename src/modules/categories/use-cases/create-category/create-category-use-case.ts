import { inject, injectable } from "tsyringe";
import { ICreateCategoryDTO } from "../../dtos/i-create-category-dto";
import { ICategoriesRepository } from "../../repositories/i-categories-repository";

@injectable()
class CreateCategoryUseCase {

    constructor(
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) { }

    async execute({ name, account_id }: ICreateCategoryDTO): Promise<void> {
        await this.categoriesRepository.create({ name, account_id })
    }
}

export { CreateCategoryUseCase }