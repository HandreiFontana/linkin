import { Account } from "../model/account";

interface ICreateAccountDTO {
    username: string;
    password: string;
    email: string;
}

class AccountsRepository {

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
}

export { AccountsRepository }