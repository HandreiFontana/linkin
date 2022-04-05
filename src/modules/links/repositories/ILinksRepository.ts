import { ICreateLinkDTO } from '../dtos/ICreateLinkDTO';
import { Link } from '../typeorm/entities/link';


interface ILinksRepository {
    create({
        title,
        description,
        url,
        created_by,
        category,
        isPrivate
    }: ICreateLinkDTO): Promise<void>,
    list(username: string): Promise<Link[]>
}

export { ILinksRepository }