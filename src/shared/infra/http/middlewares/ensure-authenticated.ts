import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import auth from "@config/auth";

import { AppError } from "@shared/errors";


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
        const { sub: accountId } = verify(
            token,
            auth.secret_token,
        ) as IPayload;

        request.account = {
            id: accountId
        }

        next();
    } catch {
        throw new AppError("Invalid token", 401)
    }
}