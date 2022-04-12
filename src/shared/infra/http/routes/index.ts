import { Router } from 'express';

import { accountsRoutes } from './account.routes';
import { categoriesRoutes } from './category.routes';
import { linksRoutes } from './link.routes';
import { passwordRoutes } from './password.routes';
import { authenticateRoutes } from './authenticate.routes';

const router = Router();

router.use("/accounts", accountsRoutes);
router.use("/links", linksRoutes);
router.use("/categories", categoriesRoutes);
router.use("/password", passwordRoutes);
router.use(authenticateRoutes);


export { router };