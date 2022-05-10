import { ICreateAccountTokenDTO } from "@modules/accounts/dtos";
import { AccountTokens } from "@modules/accounts/typeorm/entities";

interface IAccountsTokensRepository {

    create({
        expiresDate,
        refreshToken,
        accountId
    }: ICreateAccountTokenDTO): Promise<AccountTokens>;
    findByAccountIdAndRefreshToken(
        accountId: string,
        refreshToken: string
    ): Promise<AccountTokens>;
    deleteById(id: string): Promise<void>;
    findByRefreshToken(refreshToken: string): Promise<AccountTokens>;
    findByAccountId(accountId: string): Promise<AccountTokens>;
}

export { IAccountsTokensRepository }