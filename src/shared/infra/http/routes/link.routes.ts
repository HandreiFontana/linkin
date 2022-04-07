import { Router } from 'express';

import { CreateLinkController } from '../../../../modules/links/useCases/createLink/CreateLinkController';
import { DeleteLinkController } from '../../../../modules/links/useCases/deleteLink/DeleteLinkController';
import { ListLinksController } from '../../../../modules/links/useCases/listLinks/ListLinksController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';


const linksRoutes = Router();

const createLinkController = new CreateLinkController()
const listLinksController = new ListLinksController()
const deleteLinkController = new DeleteLinkController()

linksRoutes.post("/", ensureAuthenticated, createLinkController.handle)

linksRoutes.get("/:username", listLinksController.handle)

linksRoutes.delete("/:linkId", ensureAuthenticated, deleteLinkController.handle)

export { linksRoutes }