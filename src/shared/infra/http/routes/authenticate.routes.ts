import { Router } from 'express';

import { AuthenticateAccountController } from '@modules/accounts/use-cases/authenticate-account';
import { RefreshTokenController } from '@modules/accounts/use-cases/refresh-token';


const authenticateRoutes = Router();

const authenticateAccountController = new AuthenticateAccountController();
const refreshTokenController = new RefreshTokenController();

authenticateRoutes.post("/sessions", authenticateAccountController.handle);
authenticateRoutes.post("/refresh-token", refreshTokenController.handle);



export { authenticateRoutes }