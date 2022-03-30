import { v4 as uuidV4 } from 'uuid';

class Link {
    id?: string;
    title: string;
    description: string;
    url: string;
    category: string;
    created_by: string;
    isPrivate?: boolean;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Link }