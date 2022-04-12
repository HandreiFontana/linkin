import { Router } from 'express';

import { ResetPasswordAccountController } from '../../../../modules/accounts/use-cases/reset-password-account/reset-password-account-controller';


const passwordRoutes = Router();


const resetPasswordAccountController = new ResetPasswordAccountController();


passwordRoutes.post("/reset", resetPasswordAccountController.handle)


export { passwordRoutes }