import { Router } from 'express';

import { CreateLinkController } from '@modules/links/use-cases/create-link';
import { DeleteLinkController } from '@modules/links/use-cases/delete-link';
import { ListLinksController } from '@modules/links/use-cases/list-links';

import { catchAccount } from '@shared/infra/http/middlewares/catch-account';
import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensure-authenticated';


const linksRoutes = Router();

const createLinkController = new CreateLinkController()
const listLinksController = new ListLinksController()
const deleteLinkController = new DeleteLinkController()

linksRoutes.post("/:categoryId", ensureAuthenticated, createLinkController.handle)

linksRoutes.get("/:username", catchAccount, listLinksController.handle)

linksRoutes.delete("/:linkId", ensureAuthenticated, deleteLinkController.handle)

export { linksRoutes }