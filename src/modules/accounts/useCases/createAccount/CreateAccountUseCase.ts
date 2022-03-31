import { IAccountsRepository } from "../../repositories/IAccountsRepository";

interface IRequest {
    username: string;
    password: string;
    email: string;
}

class CreateAccountUseCase {
    constructor(private accountsRepository: IAccountsRepository) { }

    execute({ username, password, email }: IRequest): void {
        const usernameAlreadyExists = this.accountsRepository.findByUsername(username);

        if (usernameAlreadyExists) {
            throw new Error("Username already exists!")
        }

        const emailAlreadyExists = this.accountsRepository.findByEmail(email);

        if (emailAlreadyExists) {
            throw new Error("E-mail already exists")
        }

        this.accountsRepository.create({ username, password, email })
    }
}

export { CreateAccountUseCase }