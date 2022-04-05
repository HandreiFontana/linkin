import { Router } from 'express';

import { CreateLinkController } from '../../../../modules/links/useCases/createLink/CreateLinkController';
import { listLinksController } from '../../../../modules/links/useCases/listLinks';


const linksRoutes = Router();

linksRoutes.post("/", (request, response) => {
    return CreateLinkController().handle(request, response);
})

linksRoutes.get("/:username", (request, response) => {
    return listLinksController.handle(request, response);
})

export { linksRoutes }