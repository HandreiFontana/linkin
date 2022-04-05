import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm"
import { v4 as uuidV4 } from 'uuid';

@Entity("links")
class Link {
    @PrimaryColumn()
    id?: string;

    @Column()
    title: string;

    @Column()
    description: string;

    @Column()
    url: string;

    @Column()
    category: string;

    @Column()
    created_by: string;

    @Column()
    isPrivate?: boolean;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Link }