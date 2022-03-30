import { ICreateLinkDTO } from '../dtos/ICreateLinkDTO';
import { Link } from '../../../model/link';

interface ILinksRepository {
    create({
        title,
        description,
        url,
        created_by,
        category,
        isPrivate
    }: ICreateLinkDTO): void,
    list(username: string): Link[]
}

export { ILinksRepository }