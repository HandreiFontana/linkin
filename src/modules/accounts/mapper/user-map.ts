import { classToClass } from "class-transformer";

import { IAccountResponseDTO } from "@modules/accounts/dtos";
import { Account } from "@modules/accounts/typeorm/entities";

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