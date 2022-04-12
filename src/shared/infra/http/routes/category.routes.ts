import { Router } from 'express';

import { CreateCategoryController } from '../../../../modules/categories/use-cases/create-category/create-category-controller';

import { ensureAuthenticated } from '../middlewares/ensure-authenticated';


const categoriesRoutes = Router();

const createCategoryController = new CreateCategoryController()

categoriesRoutes.post("/", ensureAuthenticated, createCategoryController.handle)


export { categoriesRoutes }