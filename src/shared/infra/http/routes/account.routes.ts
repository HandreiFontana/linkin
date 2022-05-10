import { Router } from 'express';

import { CreateAccountController } from '@modules/accounts/use-cases/create-account';
import { ProfileAccountController } from '@modules/accounts/use-cases/profile-account';

import { ensureAuthenticated } from '@shared/infra/http/middlewares/ensure-authenticated';


const accountsRoutes = Router();

const createAccountController = new CreateAccountController();
const profileAccountController = new ProfileAccountController();

accountsRoutes.post("/", createAccountController.handle);

accountsRoutes.get("/profile", ensureAuthenticated, profileAccountController.handle);

export { accountsRoutes }