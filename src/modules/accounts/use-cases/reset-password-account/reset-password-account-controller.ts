import { Request, Response } from "express";
import { container } from "tsyringe";

import { ResetPasswordAccountUseCase } from "./reset-password-account-use-case";


class ResetPasswordAccountController {

    async handle(request: Request, response: Response): Promise<Response> {

        const { token } = request.query;

        const { password } = request.body;

        const resetPasswordAccountUseCase = container
            .resolve(ResetPasswordAccountUseCase);

        await resetPasswordAccountUseCase.execute({
            token: String(token),
            password
        })

        return response.send()
    }
}

export { ResetPasswordAccountController }