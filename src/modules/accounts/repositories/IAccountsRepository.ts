import { Account } from "../entities/account";

import { ICreateAccountDTO } from "../dtos/ICreateAccountDTO";

interface IAccountsRepository {
    create({ username, password, email }: ICreateAccountDTO): Promise<void>;
    findByUsername(username: string): Promise<Account>;
    findByEmail(email: string): Promise<Account>;
}

export { IAccountsRepository }