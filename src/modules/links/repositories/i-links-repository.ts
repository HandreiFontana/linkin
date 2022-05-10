import { ICreateLinkDTO } from '@modules/links/dtos';
import { Link } from '@modules/links/typeorm/entities';


interface ILinksRepository {
    create({
        id,
        title,
        description,
        url,
        accountId,
        categoryId,
        isPrivate
    }: ICreateLinkDTO): Promise<void>,
    list(accountId: string): Promise<Link[]>,
    findById(id: string): Promise<Link>,
    delete(link: Link): Promise<void>,
}

export { ILinksRepository }