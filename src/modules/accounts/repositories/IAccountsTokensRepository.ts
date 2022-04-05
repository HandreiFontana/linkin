import { ICreateAccountTokenDTO } from "../dtos/ICreateAccountTokenDTO";
import { AccountTokens } from "../typeorm/entities/AccountTokens";

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
}

export { IAccountsTokensRepository }