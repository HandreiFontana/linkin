import { Router } from 'express';
import { AccountsRepository } from '../../modules/accounts/repositories/AccountsRepository';
import { createAccountController } from '../../modules/accounts/useCases/createAccount';


const accountsRoutes = Router();
const accountsRepository = new AccountsRepository();

accountsRoutes.post("/", (request, response) => {
    return createAccountController.handle(request, response);
})

export { accountsRoutes }