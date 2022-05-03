import { Router } from 'express';

import { CreateLinkController } from '../../../../modules/links/use-cases/create-link/create-link-controller';
import { DeleteLinkController } from '../../../../modules/links/use-cases/delete-link/delete-link-controller';
import { ListLinksController } from '../../../../modules/links/use-cases/list-links/list-links-controller';

import { catchAccount } from '../middlewares/catch-account';
import { ensureAuthenticated } from '../middlewares/ensure-authenticated';


const linksRoutes = Router();

const createLinkController = new CreateLinkController()
const listLinksController = new ListLinksController()
const deleteLinkController = new DeleteLinkController()

linksRoutes.post("/:category_id", ensureAuthenticated, createLinkController.handle)

linksRoutes.get("/:username", catchAccount, listLinksController.handle)

linksRoutes.delete("/:link_id", ensureAuthenticated, deleteLinkController.handle)

export { linksRoutes }