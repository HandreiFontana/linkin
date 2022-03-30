import { Router } from 'express';

import { AccountsRepository } from '../../repositories/AccountsRepository';

const accountsRoutes = Router();
const accountsRepository = new AccountsRepository();

accountsRoutes.post("/", (request, response) => {
    const { username, password, email } = request.body;

    const usernameAlreadyExists = accountsRepository.findByUsername(username);

    if (usernameAlreadyExists) {
        return response.status(400).json({ Error: "Username already exists" })
    }

    const emailAlreadyExists = accountsRepository.findByEmail(email);

    if (emailAlreadyExists) {
        return response.status(400).json({ Error: "E-mail already exists" })
    }

    accountsRepository.create({ username, password, email })

    return response.status(201).send();
})

export { accountsRoutes }