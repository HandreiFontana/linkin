import { Router } from 'express';

import { usersRoutes } from './account.routes';

const router = Router();

router.use("/users", usersRoutes);

export { router };