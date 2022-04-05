import { inject, injectable } from "tsyringe";
import { IAccountResponseDTO } from "../../dtos/IAccountResponseDTO";
import { AccountMap } from "../../mapper/UserMap";

import { IAccountsRepository } from "../../repositories/IAccountsRepository";


@injectable()
class ProfileAccountUseCase {

    constructor(
        @inject("AccountsRepository")
        private accountsRepository: IAccountsRepository
    ) { }

    async execute(username: string): Promise<IAccountResponseDTO> {
        const account = await this.accountsRepository.findByUsername(username);

        return AccountMap.toDTO(account);
    }
}

export { ProfileAccountUseCase } 