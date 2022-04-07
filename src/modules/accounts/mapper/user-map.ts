import { classToClass } from "class-transformer";

import { IAccountResponseDTO } from "../dtos/i-account-response-dto";
import { Account } from "../typeorm/entities/account";


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