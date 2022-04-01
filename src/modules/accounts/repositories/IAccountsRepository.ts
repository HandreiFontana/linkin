import { Account } from "../entities/account";
import { ICreateAccountDTO } from "../dtos/ICreateAccountDTO";

interface IAccountsRepository {
    create({ username, password, email }: ICreateAccountDTO): void;
    findByUsername(username: string): Account;
    findByEmail(email: string): Account;
}

export { IAccountsRepository }