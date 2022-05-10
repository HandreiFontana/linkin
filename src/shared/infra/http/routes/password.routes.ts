import { Router } from 'express';

import { ResetPasswordAccountController } from '@modules/accounts/use-cases/reset-password-account';
import { SendForgotPasswordMailController } from '@modules/accounts/use-cases/send-forgot-password-mail';


const passwordRoutes = Router();


const resetPasswordAccountController = new ResetPasswordAccountController();
const sendForgotPasswordMailController = new SendForgotPasswordMailController();


passwordRoutes.post("/reset", resetPasswordAccountController.handle)
passwordRoutes.post("/forgot", sendForgotPasswordMailController.handle)


export { passwordRoutes }