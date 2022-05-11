import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Account } from "@modules/accounts/typeorm/entities";

@Entity("categories")
class Category {
    @PrimaryColumn()
    id?: string;

    @Column({ name: "name", nullable: true })
    name: string;

    @ManyToOne(() => Account, { nullable: true, eager: true })
    @JoinColumn({ name: "account_id", referencedColumnName: 'id' })
    accountId: string;
    account: Account;

    @CreateDateColumn({ name: 'created_at', nullable: true })
    createdAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}

export { Category }