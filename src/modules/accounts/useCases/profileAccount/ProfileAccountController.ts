import { Request, Response } from 'express';
import { container } from "tsyringe";

import { ProfileAccountUseCase } from "./ProfileAccountUseCase";


class ProfileAccountController {

    async handle(request: Request, response: Response): Promise<Response> {
        // const { username } = request.account;

        const { username } = request.headers;

        const profileAccountUseCase = container.resolve(ProfileAccountUseCase);

        const account = await profileAccountUseCase.execute(String(username));

        // const account = await profileAccountUseCase.execute(username);

        return response.json(account);
    }
}

export { ProfileAccountController }