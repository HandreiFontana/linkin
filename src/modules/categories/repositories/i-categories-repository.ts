import { ICreateCategoryDTO } from "../dtos/i-create-category-dto"

import { Category } from "../typeorm/entities/category"


interface ICategoriesRepository {
    create({ id, name, account_id }: ICreateCategoryDTO): Promise<void>,
    list(account_id: string): Promise<Category[]>,
    findById(id: string): Promise<Category>,
    delete(category: Category): Promise<void>
}

export { ICategoriesRepository }