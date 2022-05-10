import { ICreateCategoryDTO } from "@modules/categories/dtos";
import { Category } from "@modules/categories/typeorm/entities";


interface ICategoriesRepository {
    create({ id, name, accountId }: ICreateCategoryDTO): Promise<void>,
    list(accountId: string): Promise<Category[]>,
    findById(id: string): Promise<Category>,
    delete(category: Category): Promise<void>
}

export { ICategoriesRepository }