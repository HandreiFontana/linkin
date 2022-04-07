import { Request, Response } from 'express';
import { container } from "tsyringe";

import { ProfileAccountUseCase } from './profile-account-use-case';


class ProfileAccountController {

    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.account;

        const profileAccountUseCase = container.resolve(ProfileAccountUseCase);

        const account = await profileAccountUseCase.execute(id);

        return response.json(account);
    }
}

export { ProfileAccountController }