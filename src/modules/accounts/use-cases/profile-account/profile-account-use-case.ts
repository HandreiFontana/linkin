import { inject, injectable } from "tsyringe";

import { IAccountResponseDTO } from "../../dtos/i-account-response-dto";
import { IAccountsRepository } from "../../repositories/i-accounts-repository";

import { AccountMap } from "../../mapper/user-map";


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