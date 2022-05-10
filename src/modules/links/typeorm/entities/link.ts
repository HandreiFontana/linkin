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

    @Column({ name: 'title', nullable: true })
    title: string;

    @Column({ name: 'description', nullable: true })
    description: string;

    @Column({ name: 'url', nullable: true })
    url: string;

    @ManyToOne(() => Category)
    @JoinColumn({ name: "category_id", nullable: true })
    category: Category;
    categoryId: string;

    @ManyToOne(() => Account)
    @JoinColumn({ name: "account_id", nullable: true })
    account: Account;
    accountId: string;

    @Column({ name: "isPrivate", nullable: true })
    isPrivate: boolean;

    @CreateDateColumn({ name: "created_at", nullable: true })
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Link }