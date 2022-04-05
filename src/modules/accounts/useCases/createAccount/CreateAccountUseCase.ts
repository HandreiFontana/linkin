import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt"

import { ICreateAccountDTO } from "../../dtos/ICreateAccountDTO";
import { IAccountsRepository } from "../../repositories/IAccountsRepository";

import { AppError } from "../../../../shared/errors/AppErrors";

@injectable()
class CreateAccountUseCase {

    constructor(
        @inject("AccountsRepository")
        private accountsRepository: IAccountsRepository
    ) { }

    async execute({ username, password, email }: ICreateAccountDTO): Promise<void> {
        const emailAlreadyExists = await this.accountsRepository
            .findByEmail(email);

        if (emailAlreadyExists) {
            throw new AppError("E-mail already exists")
        }

        const usernameAlreadyExists = await this.accountsRepository
            .findByUsername(username);


        if (usernameAlreadyExists) {
            throw new AppError("Username already exists")
        }

        const passwordHash = await hash(password, 8);

        await this.accountsRepository.create({
            username,
            password: passwordHash,
            email
        });
    }
}

export { CreateAccountUseCase }