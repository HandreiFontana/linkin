import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn
} from "typeorm";
import { v4 as uuidV4 } from 'uuid';

import { Account } from "../../../accounts/typeorm/entities/account";
import { Category } from "../../../categories/typeorm/entities/category";

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
    category_id: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id" })
    category: Category;

    @Column()
    account_id: string;

    @ManyToOne(() => Account)
    @JoinColumn({ name: "account_id" })
    account: Account;

    @Column()
    isPrivate: boolean;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Link }