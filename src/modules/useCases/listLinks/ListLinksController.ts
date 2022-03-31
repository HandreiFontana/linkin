import { Request, Response } from 'express';
import { ListLinksUseCase } from "./ListLinksUseCase";


class ListLinksController {
    constructor(private listLinksUseCase: ListLinksUseCase) { }

    handle(request: Request, response: Response): Response {
        const { username } = request.params;

        const accountLinks = this.listLinksUseCase.execute(username);

        return response.json(accountLinks);
    }
}

export { ListLinksController }