import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import auth from "../../../../config/auth";
import { AppError } from "../../../errors/app-errors";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: account_id } = verify(
            token,
            auth.secret_token,
        ) as IPayload;

        request.account = {
            id: account_id
        }

        next();
    } catch {
        throw new AppError("Invalid token", 401)
    }
}