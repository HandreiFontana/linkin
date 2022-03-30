import { Router } from 'express';

import { accountsRoutes } from './account.routes';

const router = Router();

router.use("/users", accountsRoutes);

export { router };