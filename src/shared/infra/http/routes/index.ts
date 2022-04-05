import { Router } from 'express';

import { accountsRoutes } from './account.routes';
import { authenticateRoutes } from './authenticate.routes';
import { linksRoutes } from './link.routes';

const router = Router();

router.use("/accounts", accountsRoutes);
router.use("/links", linksRoutes);
router.use(authenticateRoutes);


export { router };