import { ICreateAccountTokenDTO } from "../dtos/i-create-account-token-dto";
import { AccountTokens } from "../typeorm/entities/account-tokens";

interface IAccountsTokensRepository {

    create({
        expires_date,
        refresh_token,
        account_id
    }: ICreateAccountTokenDTO): Promise<AccountTokens>;
    findByAccountIdAndRefreshToken(
        account_id: string,
        refresh_token: string
    ): Promise<AccountTokens>;
    deleteById(id: string): Promise<void>;
    findByRefreshToken(refresh_token: string): Promise<AccountTokens>;
    findByAccountId(account_id: string): Promise<AccountTokens>;
}

export { IAccountsTokensRepository }