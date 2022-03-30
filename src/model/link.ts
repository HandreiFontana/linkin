import { v4 as uuidV4 } from 'uuid';

class Link {
    id?: string;
    title: string;
    description: string;
    url: string;
    category: string;
    private: boolean;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Link }