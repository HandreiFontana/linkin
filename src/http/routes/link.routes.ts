import { Router } from 'express';

import { LinksRepository } from '../../repositories/LinksRepository';

const linksRoutes = Router();
const linksRepository = new LinksRepository();

linksRoutes.post("/", (request, response) => {
    const { title, description, url, category } = request.body;

    linksRepository.create({ title, description, url, category })

    return response.status(201).send();
})

linksRoutes.get("/", (request, response) => {
    const all = linksRepository.list();

    return response.json(all)
})

export { linksRoutes }