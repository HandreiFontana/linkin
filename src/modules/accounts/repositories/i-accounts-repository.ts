import { ICreateAccountDTO } from "@modules/accounts/dtos";
import { Account } from "@modules/accounts/typeorm/entities";


interface IAccountsRepository {
    create({ username, password, email }: ICreateAccountDTO): Promise<void>;
    findByUsername(username: string): Promise<Account>;
    findByEmail(email: string): Promise<Account>;
    findById(id: string): Promise<Account>;
}

export { IAccountsRepository }