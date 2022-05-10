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
        expiresDate,
        refreshToken,
        accountId
    }: ICreateAccountTokenDTO): Promise<AccountTokens> {
        const accountToken = this.repository.create({
            expiresDate,
            refreshToken,
            accountId
        })

        await this.repository.save(accountToken);

        return accountToken;
    }

    async findByAccountIdAndRefreshToken(
        accountId: string,
        refreshToken: string
    ): Promise<AccountTokens> {
        const accountsTokens = await this.repository.findOne({
            accountId,
            refreshToken,
        })

        return accountsTokens;
    }

    async deleteById(id: string): Promise<void> {
        await this.repository.delete(id)
    }

    async findByRefreshToken(refreshToken: string): Promise<AccountTokens> {
        const accountToken = await this.repository.findOne({ refreshToken })

        return accountToken;
    }

    async findByAccountId(accountId: string): Promise<AccountTokens> {
        const accountToken = await this.repository.findOne({ accountId })

        return accountToken
    }
}

export { AccountsTokensRepository };