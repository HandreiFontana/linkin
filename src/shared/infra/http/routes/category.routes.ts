import { Router } from 'express';

import { CreateCategoryController } from '../../../../modules/categories/use-cases/create-category/create-category-controller';
import { DeleteCategoryController } from '../../../../modules/categories/use-cases/delete-category/delete-category-controller';
import { ListCategoriesController } from '../../../../modules/categories/use-cases/list-categories/list-categories-controller';

import { ensureAuthenticated } from '../middlewares/ensure-authenticated';


const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoriesController()
const deleteCategoryController = new DeleteCategoryController()

categoriesRoutes.post("/", ensureAuthenticated, createCategoryController.handle)

categoriesRoutes.get("/:username", listCategoriesController.handle)

categoriesRoutes.delete("/:category_id", ensureAuthenticated, deleteCategoryController.handle)

export { categoriesRoutes }