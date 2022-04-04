import { getRepository, Repository } from "typeorm";

import { ICreateAccountDTO } from "../dtos/ICreateAccountDTO";
import { IAccountsRepository } from "./IAccountsRepository"

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
}

export { AccountsRepository }