import { Router } from 'express';

import { CreateCategoryController } from '@modules/categories/use-cases/create-category';
import { DeleteCategoryController } from '@modules/categories/use-cases/delete-category';
import { ListCategoriesController } from '@modules/categories/use-cases/list-categories';

import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensure-authenticated';


const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoriesController()
const deleteCategoryController = new DeleteCategoryController()

categoriesRoutes.post("/", ensureAuthenticated, createCategoryController.handle)

categoriesRoutes.get("/:username", listCategoriesController.handle)

categoriesRoutes.delete("/:categoryId", ensureAuthenticated, deleteCategoryController.handle)

export { categoriesRoutes }