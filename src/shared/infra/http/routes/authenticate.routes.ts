import { Router } from 'express';

import { AuthenticateAccountController } from '../../../../modules/accounts/useCases/authenticateAccount/AuthenticateAccountController';
import { RefreshTokenController } from '../../../../modules/accounts/useCases/refreshToken/RefreshTokenController';


const authenticateRoutes = Router();

const authenticateAccountController = new AuthenticateAccountController();
const refreshTokenController = new RefreshTokenController();

authenticateRoutes.post("/sessions", authenticateAccountController.handle);
authenticateRoutes.post("/refresh-token", refreshTokenController.handle);



export { authenticateRoutes }