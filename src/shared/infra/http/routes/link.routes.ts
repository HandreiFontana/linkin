import { Router } from 'express';

import { CreateLinkController } from '../../../../modules/links/useCases/createLink/CreateLinkController';
import { ListLinksController } from '../../../../modules/links/useCases/listLinks/ListLinksController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';


const linksRoutes = Router();

const createLinkController = new CreateLinkController()
const listLinksController = new ListLinksController()

linksRoutes.post("/", ensureAuthenticated, createLinkController.handle)

linksRoutes.get("/:username", listLinksController.handle)

export { linksRoutes }