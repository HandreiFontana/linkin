import { LinksRepository } from "../../links/repositories/LinksRepository";
import { ListLinksController } from "./ListLinksController";
import { ListLinksUseCase } from "./ListLinksUseCase";

const linksRepository = LinksRepository.getInstance();
const listLinksUseCase = new ListLinksUseCase(linksRepository);
const listLinksController = new ListLinksController(listLinksUseCase);

export { listLinksController };