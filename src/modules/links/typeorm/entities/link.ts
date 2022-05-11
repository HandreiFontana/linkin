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

    @ManyToOne(() => Category, { nullable: true, eager: true })
    @JoinColumn({ name: "category_id", referencedColumnName: 'id' })
    categoryId: string;
    category: Category;

    @ManyToOne(() => Account, { nullable: true, eager: true })
    @JoinColumn({ name: "account_id", referencedColumnName: 'id' })
    accountId: string;
    account: Account;

    @Column({ name: "isPrivate", nullable: true })
    isPrivate: boolean;

    @CreateDateColumn({ name: "created_at", nullable: true })
    createdAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Link }