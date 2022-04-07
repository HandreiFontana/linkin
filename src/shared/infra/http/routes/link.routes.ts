import { Router } from 'express';

import { CreateLinkController } from '../../../../modules/links/useCases/createLink/CreateLinkController';
import { listLinksController } from '../../../../modules/links/useCases/listLinks';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';


const linksRoutes = Router();

const createLinkController = new CreateLinkController()

linksRoutes.post("/", ensureAuthenticated, createLinkController.handle)

linksRoutes.get("/:username", (request, response) => {
    return listLinksController.handle(request, response);
})

export { linksRoutes }