import { LinksRepository } from "../../repositories/LinksRepository";
import { CreateLinkController } from "../../useCases/createLink/CreateLinkController";
import { CreateLinkUseCase } from "../../useCases/createLink/CreateLinkUseCase";


export default (): CreateLinkController => {

    const linksRepository = new LinksRepository();

    const createLinkUseCase = new CreateLinkUseCase(linksRepository);

    const createLinkController = new CreateLinkController(createLinkUseCase);

    return createLinkController

}