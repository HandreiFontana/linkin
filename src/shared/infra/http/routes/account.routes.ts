import { Router } from 'express';

import { CreateAccountController } from '../../../../modules/accounts/use-cases/create-account/create-account-controller';
import { ProfileAccountController } from '../../../../modules/accounts/use-cases/profile-account/profile-account-controller';

import { ensureAuthenticated } from '../middlewares/ensure-authenticated';


const accountsRoutes = Router();

const createAccountController = new CreateAccountController();
const profileAccountController = new ProfileAccountController();

accountsRoutes.post("/", createAccountController.handle);

accountsRoutes.get("/profile", ensureAuthenticated, profileAccountController.handle);

export { accountsRoutes }