import { ICreateLinkDTO } from '../dtos/i-create-link-dto';

import { Link } from '../typeorm/entities/link';


interface ILinksRepository {
    create({
        id,
        title,
        description,
        url,
        account_id,
        category_id,
        isPrivate
    }: ICreateLinkDTO): Promise<void>,
    list(username: string): Promise<Link[]>,
    findById(id: string): Promise<Link[]>,
    delete(link: Link): Promise<void>,
}

export { ILinksRepository }