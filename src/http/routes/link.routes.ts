import { Router } from 'express';
import { LinksRepository } from '../../modules/links/repositories/LinksRepository';


const linksRoutes = Router();
const linksRepository = new LinksRepository();

linksRoutes.post("/", (request, response) => {
    const { title, description, url, category, created_by, isPrivate } = request.body;

    linksRepository.create({ title, description, url, category, created_by, isPrivate })

    return response.status(201).send();
})

linksRoutes.get("/:username", (request, response) => {
    const { username } = request.params;

    const all = linksRepository.list();

    const accountLinks = all.filter(link => link.created_by === username);

    return response.json(accountLinks)
})

export { linksRoutes }