import { getRepository, Repository } from "typeorm";

import { ICreateCategoryDTO } from "../../dtos/i-create-category-dto";
import { ICategoriesRepository } from "../../repositories/i-categories-repository";

import { Category } from "../entities/category";


class CategoriesRepository implements ICategoriesRepository {

    private repository: Repository<Category>

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ id, name, account_id }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({ id, name, account_id })

        await this.repository.save(category);
    }

    async list(account_id: string): Promise<Category[]> {
        const categories = await this.repository.find()

        return categories.filter(category => category.account_id === account_id)
    }

}

export { CategoriesRepository }