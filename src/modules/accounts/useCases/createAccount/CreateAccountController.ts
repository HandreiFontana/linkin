import { Request, Response } from 'express';
import { CreateAccountUseCase } from "./CreateAccountUseCase";


class CreateAccountController {
    constructor(private createAccountUseCase: CreateAccountUseCase) { }

    handle(request: Request, response: Response): Response {
        const { username, password, email } = request.body;

        this.createAccountUseCase.execute({ username, password, email });

        return response.status(201).send()
    }
}

export { CreateAccountController }