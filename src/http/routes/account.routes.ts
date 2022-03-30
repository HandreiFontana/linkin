import { Router } from 'express';

import { AccountsRepository } from '../../repositories/AccountsRepository';

const accountsRoutes = Router();
const accountsRepository = new AccountsRepository();

accountsRoutes.post("/", (request, response) => {
    const { username, password, email } = request.body;

    accountsRepository.create({ username, password, email })

    return response.status(201).send();
})

accountsRoutes.get("/", (request, response) => {
    const all = accountsRepository.list();

    return response.json(all)
})

export { accountsRoutes }