import { Router } from 'express';
import { Account } from '../../model/account';

const usersRoutes = Router();

const account: Account[] = [];

usersRoutes.post("/", (request, response) => {
    const { username, password, email } = request.body;

    const account = new Account();

    Object.assign(account, {
        username,
        password,
        email,
        created_at: new Date()
    })

    return response.status(201).json({ account });
})

export { usersRoutes }