import { Router } from 'express';

import { accountsRoutes } from './account.routes';
import { authenticateRoutes } from './authenticate.routes';
import { categoriesRoutes } from './category.routes';
import { linksRoutes } from './link.routes';

const router = Router();

router.use("/accounts", accountsRoutes);
router.use("/links", linksRoutes);
router.use("/categories", categoriesRoutes);
router.use(authenticateRoutes);


export { router };