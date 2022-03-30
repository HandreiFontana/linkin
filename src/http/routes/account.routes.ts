import { Router } from 'express';

import { AccountsRepository } from '../../repositories/AccountsRepository';

const usersRoutes = Router();
const accountsRepository = new AccountsRepository();

usersRoutes.post("/", (request, response) => {
    const { username, password, email } = request.body;

    accountsRepository.create({ username, password, email })

    return response.status(201).send();
})

export { usersRoutes }