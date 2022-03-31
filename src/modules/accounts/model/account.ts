import { v4 as uuidV4 } from 'uuid';

class Account {
    id?: string;
    username: string;
    password: string;
    email: string;
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Account }