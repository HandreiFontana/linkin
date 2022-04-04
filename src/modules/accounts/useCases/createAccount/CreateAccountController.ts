import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { CreateAccountUseCase } from "./CreateAccountUseCase";


class CreateAccountController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { username, password, email } = request.body;

        const createAccountUseCase = container.resolve(CreateAccountUseCase)

        await createAccountUseCase.execute({
            username,
            password,
            email
        })

        return response.status(201).send()
    }
}

export { CreateAccountController }