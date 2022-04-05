import { Router } from 'express';

import { CreateAccountController } from '../../../../modules/accounts/useCases/createAccount/CreateAccountController';
import { ProfileAccountController } from '../../../../modules/accounts/useCases/profileAccount/ProfileAccountController';

import { ensureAuthenticated } from '../middlewares/ensureAuthenticated';


const accountsRoutes = Router();

const createAccountController = new CreateAccountController();
const profileAccountController = new ProfileAccountController();

accountsRoutes.post("/", createAccountController.handle);

accountsRoutes.get("/profile", ensureAuthenticated, profileAccountController.handle);

export { accountsRoutes }