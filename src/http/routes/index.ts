import { Router } from 'express';

import { accountsRoutes } from './account.routes';
import { linksRoutes } from './link.routes';

const router = Router();

router.use("/users", accountsRoutes);
router.use("/links", linksRoutes);

export { router };