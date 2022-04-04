import { inject, injectable } from "tsyringe";
import { hash } from "bcrypt"

import { ICreateAccountDTO } from "../../dtos/ICreateAccountDTO";
import { IAccountsRepository } from "../../repositories/IAccountsRepository";


@injectable()
class CreateAccountUseCase {

    constructor(
        @inject("AccountsRepository")
        private accountsRepository: IAccountsRepository
    ) { }

    async execute({ username, password, email }: ICreateAccountDTO): Promise<void> {
        const usernameAlreadyExists = await this.accountsRepository.findByUsername(username);


        if (usernameAlreadyExists) {
            throw new Error("Username already exists!")
        }

        const emailAlreadyExists = await this.accountsRepository.findByEmail(email);

        if (emailAlreadyExists) {
            throw new Error("E-mail already exists")
        }

        console.log(typeof (password))

        const passwordHash = await hash(password, 8);

        await this.accountsRepository.create({
            username,
            password: passwordHash,
            email
        });
    }
}

export { CreateAccountUseCase }