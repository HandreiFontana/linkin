import { LinksRepository } from "../../repositories/LinksRepository";
import { ListLinksController } from "./ListLinksController";
import { ListLinksUseCase } from "./ListLinksUseCase";

const linksRepository = null;
const listLinksUseCase = new ListLinksUseCase(linksRepository);
const listLinksController = new ListLinksController(listLinksUseCase);

export { listLinksController };