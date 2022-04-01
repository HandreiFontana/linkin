import { Router } from 'express';

import createLinkController from '../../modules/links/useCases/createLink';
import { listLinksController } from '../../modules/links/useCases/listLinks';

const linksRoutes = Router();

linksRoutes.post("/", (request, response) => {
    return createLinkController().handle(request, response);
})

linksRoutes.get("/:username", (request, response) => {
    return listLinksController.handle(request, response);
})

export { linksRoutes }