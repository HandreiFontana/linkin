import { Router } from 'express';

import { LinksRepository } from '../../modules/links/repositories/LinksRepository';
import { createLinkController } from '../../modules/useCases/createLink';
import { listLinksController } from '../../modules/useCases/listLinks';

const linksRoutes = Router();

linksRoutes.post("/", (request, response) => {
    return createLinkController.handle(request, response);
})

linksRoutes.get("/:username", (request, response) => {
    return listLinksController.handle(request, response);
})

export { linksRoutes }