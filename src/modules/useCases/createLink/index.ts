import { LinksRepository } from "../../links/repositories/LinksRepository";
import { CreateLinkController } from "../../useCases/createLink/CreateLinkController";
import { CreateLinkUseCase } from "../../useCases/createLink/CreateLinkUseCase";


const linksRepository = new LinksRepository();

const createLinkUseCase = new CreateLinkUseCase(linksRepository);

const createLinkController = new CreateLinkController(createLinkUseCase);

export { createLinkController };