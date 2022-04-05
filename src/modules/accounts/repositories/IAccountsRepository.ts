import { ICreateAccountDTO } from "../dtos/ICreateAccountDTO";
import { Account } from "../typeorm/entities/account";


interface IAccountsRepository {
    create({ username, password, email }: ICreateAccountDTO): Promise<void>;
    findByUsername(username: string): Promise<Account>;
    findByEmail(email: string): Promise<Account>;
    findById(id: string): Promise<Account>;
}

export { IAccountsRepository }