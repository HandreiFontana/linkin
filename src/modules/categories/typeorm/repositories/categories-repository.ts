import { getRepository, Repository } from "typeorm";

import { ICreateCategoryDTO } from "@modules/categories/dtos";
import { ICategoriesRepository } from "@modules/categories/repositories";
import { Category } from "@modules/categories/typeorm/entities";


class CategoriesRepository implements ICategoriesRepository {

    private repository: Repository<Category>

    constructor() {
        this.repository = getRepository(Category);
    }

    async create({ id, name, accountId }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({ id, name, accountId })

        await this.repository.save(category);
    }

    async list(accountId: string): Promise<Category[]> {
        const categories = await this.repository.find()

        console.log(categories)

        return categories.filter(category => category.accountId === accountId)
    }

    async findById(id: string): Promise<Category> {
        const category = this.repository.findOne(id);

        return category;
    }

    async delete(category: Category): Promise<void> {
        await this.repository.remove(category)
    }
}

export { CategoriesRepository }