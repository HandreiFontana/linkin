import { getRepository, Repository } from "typeorm";

import { ICreateAccountTokenDTO } from "@modules/accounts/dtos";
import { IAccountsTokensRepository } from "@modules/accounts/repositories";
import { AccountTokens } from "@modules/accounts/typeorm/entities";


class AccountsTokensRepository implements IAccountsTokensRepository {
    private repository: Repository<AccountTokens>;

    constructor() {
        this.repository = getRepository(AccountTokens);
    }

    async create({
        expires_date,
        refresh_token,
        account_id
    }: ICreateAccountTokenDTO): Promise<AccountTokens> {
        const accountToken = this.repository.create({
            expires_date,
            refresh_token,
            account_id
        })

        await this.repository.save(accountToken);

        return accountToken;
    }

    async findByAccountIdAndRefreshToken(
        account_id: string,
        refresh_token: string
    ): Promise<AccountTokens> {
        const accountsTokens = await this.repository.findOne({
            account_id,
            refresh_token,
        })

        return accountsTokens;
    }

    async deleteById(id: string): Promise<void> {
        await this.repository.delete(id)
    }

    async findByRefreshToken(refresh_token: string): Promise<AccountTokens> {
        const accountToken = await this.repository.findOne({ refresh_token })

        return accountToken;
    }

    async findByAccountId(account_id: string): Promise<AccountTokens> {
        const accountToken = await this.repository.findOne({ account_id })

        return accountToken
    }
}

export { AccountsTokensRepository };