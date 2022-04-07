import { ICreateLinkDTO } from '../dtos/ICreateLinkDTO';
import { Link } from '../typeorm/entities/link';


interface ILinksRepository {
    create({
        id,
        title,
        description,
        url,
        account_id,
        category,
        isPrivate
    }: ICreateLinkDTO): Promise<void>,
    list(username: string): Promise<Link[]>
}

export { ILinksRepository }