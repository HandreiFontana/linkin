import { classToClass } from "class-transformer";
import { IAccountResponseDTO } from "../dtos/IAccountResponseDTO";
import { Account } from "../entities/account";

class AccountMap {

    static toDTO({
        username,
        email,
        password,
        id
    }: Account): IAccountResponseDTO {
        const account = classToClass({
            username,
            email,
            password,
            id,
        })

        return account;
    }
}

export { AccountMap }