import { ILinksRepository } from "../../repositories/ILinksRepository"

interface IRequest {
    title: string,
    description: string,
    url: string,
    created_by: string,
    category: string,
    isPrivate?: boolean
}

class CreateLinkUseCase {
    constructor(private linksRepository: ILinksRepository) { }

    async execute({
        title,
        description,
        url,
        created_by,
        category,
        isPrivate
    }: IRequest): Promise<void> {
        await this.linksRepository.create({
            title,
            description,
            url,
            created_by,
            category,
            isPrivate
        })
    }

}

export { CreateLinkUseCase }