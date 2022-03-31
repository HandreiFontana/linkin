import { CreateLinkController } from "../../useCases/createLink/CreateLinkController";
import { CreateLinkUseCase } from "../../useCases/createLink/CreateLinkUseCase";
import { LinksRepository } from "./LinksRepository";


const linksRepository = new LinksRepository();

const createLinkUseCase = new CreateLinkUseCase(linksRepository);

const createLinkController = new CreateLinkController(createLinkUseCase);

export { createLinkController };