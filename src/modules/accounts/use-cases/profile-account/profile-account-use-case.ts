import { inject, injectable } from "tsyringe";

import { IAccountResponseDTO } from "@modules/accounts/dtos";
import { IAccountsRepository } from "@modules/accounts/repositories";
import { AccountMap } from "@modules/accounts/mapper/user-map";


@injectable()
class ProfileAccountUseCase {

    constructor(
        @inject("AccountsRepository")
        private accountsRepository: IAccountsRepository
    ) { }

    async execute(id: string): Promise<IAccountResponseDTO> {
        const account = await this.accountsRepository.findById(id);

        return AccountMap.toDTO(account);
    }
}

export { ProfileAccountUseCase } 