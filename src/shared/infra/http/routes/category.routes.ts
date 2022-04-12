import { Router } from 'express';

import { CreateCategoryController } from '../../../../modules/categories/use-cases/create-category/create-category-controller';
import { ListCategoriesController } from '../../../../modules/categories/use-cases/list-categories/list-categories-controller';

import { ensureAuthenticated } from '../middlewares/ensure-authenticated';


const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController()
const listCategoriesController = new ListCategoriesController()

categoriesRoutes.post("/", ensureAuthenticated, createCategoryController.handle)

categoriesRoutes.get("/:username", listCategoriesController.handle)

export { categoriesRoutes }