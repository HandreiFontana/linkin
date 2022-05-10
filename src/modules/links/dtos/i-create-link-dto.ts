import { Category } from "@modules/categories/typeorm/entities/category";

interface ICreateLinkDTO {
    id?: string;
    title: string,
    description: string,
    url: string,
    accountId: string,
    categoryId: string,
    category: Category,
    isPrivate?: boolean
};

export { ICreateLinkDTO };