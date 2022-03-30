import { Account } from "../../../model/account";

import { ICreateAccountDTO } from "../dtos/ICreateAccountDTO";
import { IAccountsRepository } from "./IAccountsRepository"

class AccountsRepository implements IAccountsRepository {

    private accounts: Account[];

    constructor() {
        this.accounts = [];
    }

    create({ username, password, email }: ICreateAccountDTO) {
        const account = new Account();

        Object.assign(account, {
            username,
            password,
            email,
            created_at: new Date()
        })

        this.accounts.push(account);
    }

    findByUsername(username: string): Account {
        const account = this.accounts.find(account => account.username === username);

        return account;
    }

    findByEmail(email: string): Account {
        const account = this.accounts.find(account => account.email === email);

        return account;
    }
}

export { AccountsRepository }