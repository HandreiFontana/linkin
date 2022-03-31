import { AccountsRepository } from "../../repositories/AccountsRepository";
import { CreateAccountController } from "./CreateAccountController";
import { CreateAccountUseCase } from "./CreateAccountUseCase";

const accountsRepository = new AccountsRepository();
const createAccountUseCase = new CreateAccountUseCase(accountsRepository);
const createAccountController = new CreateAccountController(createAccountUseCase);

export { createAccountController };