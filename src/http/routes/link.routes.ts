import { Router } from 'express';

import { LinksRepository } from '../../modules/links/repositories/LinksRepository';
import { createLinkController } from '../../modules/links/repositories';

const linksRoutes = Router();
const linksRepository = new LinksRepository();

linksRoutes.post("/", (request, response) => {
    return createLinkController.handle(request, response);
})

linksRoutes.get("/:username", (request, response) => {
    const { username } = request.params;

    const accountLinks = linksRepository.list(username);

    return response.json(accountLinks)
})

export { linksRoutes }