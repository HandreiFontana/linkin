import { getRepository, Repository } from "typeorm";

import { ICreateAccountDTO } from "../../dtos/i-create-account-dto";
import { IAccountsRepository } from "../../repositories/i-accounts-repository";

import { Account } from "../entities/account";


class AccountsRepository implements IAccountsRepository {

    private repository: Repository<Account>;

    constructor() {
        this.repository = getRepository(Account);
    }

    async create({
        username,
        password,
        email,
        id
    }: ICreateAccountDTO): Promise<void> {
        const account = this.repository.create({
            username,
            password,
            email,
            id
        })

        await this.repository.save(account);
    }

    async findByUsername(username: string): Promise<Account> {
        const account = await this.repository.findOne({ username });
        return account;
    }

    async findByEmail(email: string): Promise<Account> {
        const account = await this.repository.findOne({ email });
        return account;
    }

    async findById(id: string): Promise<Account> {
        const account = await this.repository.findOne({ id });
        return account;
    }
}

export { AccountsRepository }