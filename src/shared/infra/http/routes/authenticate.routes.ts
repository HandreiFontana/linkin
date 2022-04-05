import { Router } from 'express';
import { AuthenticateAccountController } from '../../../../modules/accounts/useCases/authenticateAccount/AuthenticateAccountController';


const authenticateRoutes = Router();

const authenticateAccountController = new AuthenticateAccountController();

authenticateRoutes.post("/sessions", authenticateAccountController.handle);


export { authenticateRoutes }