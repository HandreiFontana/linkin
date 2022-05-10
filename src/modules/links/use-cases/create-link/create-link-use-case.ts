import { inject, injectable } from "tsyringe"

import { ICategoriesRepository } from "@modules/categories/repositories"
import { ICreateLinkDTO } from "@modules/links/dtos"
import { ILinksRepository } from "@modules/links/repositories"

import { AppError } from "@shared/errors";


@injectable()
class CreateLinkUseCase {

    constructor(
        @inject("LinksRepository")
        private linksRepository: ILinksRepository,
        @inject("CategoriesRepository")
        private categoriesRepository: ICategoriesRepository
    ) { }

    async execute({
        title,
        description,
        url,
        account_id,
        category_id,
        isPrivate
    }: ICreateLinkDTO): Promise<void> {
        const category = await this.categoriesRepository.findById(category_id);

        if (!category || !(category.account_id === account_id)) {
            throw new AppError("Unauthorized", 401)
        }

        await this.linksRepository.create({
            title,
            description,
            url,
            account_id,
            category_id,
            isPrivate
        })
    }

}

export { CreateLinkUseCase }