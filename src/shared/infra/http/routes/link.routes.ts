import { Router } from 'express';

import { CreateLinkController } from '../../../../modules/links/use-cases/create-link/create-link-controller';
import { DeleteLinkController } from '../../../../modules/links/use-cases/delete-link/delete-link-controller';
import { ListCategoriesController } from '../../../../modules/links/use-cases/list-categories/list-categories-controller';
import { ListLinksController } from '../../../../modules/links/use-cases/list-links/list-links-controller';

import { ensureAuthenticated } from '../middlewares/ensure-authenticated';


const linksRoutes = Router();

const createLinkController = new CreateLinkController()
const listLinksController = new ListLinksController()
const deleteLinkController = new DeleteLinkController()
const listCategoriesController = new ListCategoriesController()

linksRoutes.post("/", ensureAuthenticated, createLinkController.handle)

linksRoutes.get("/:username", listLinksController.handle)

linksRoutes.delete("/:linkId", ensureAuthenticated, deleteLinkController.handle)

linksRoutes.get("/categories/:username", listCategoriesController.handle)

export { linksRoutes }