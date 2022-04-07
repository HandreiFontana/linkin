import { Request, Response } from 'express';
import { container } from 'tsyringe';

import { AuthenticateAccountUseCase } from './authenticate-account-use-case';


class AuthenticateAccountController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { password, email } = request.body;

        const authenticateAccountUseCase = container
            .resolve(AuthenticateAccountUseCase)

        const token = await authenticateAccountUseCase.execute({ password, email });

        return response.json(token);
    }
}

export { AuthenticateAccountController }