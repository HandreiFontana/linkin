import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import auth from "../../../../config/auth";

interface IPayload {
    sub: string;
}


export async function catchAccount(
    request: Request,
    response: Response,
    next: NextFunction
) {
    try {

        const authHeader = request.headers.authorization;

        const [, token] = authHeader.split(' ');


        const { sub: account_id } = verify(
            token,
            auth.secret_token,
        ) as IPayload;

        request.account = {
            id: account_id
        }

        next();
    } catch {
        request.account = {
            id: undefined
        }

        next();
    }
}