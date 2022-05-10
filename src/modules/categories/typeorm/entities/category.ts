import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Account } from "../../../accounts/typeorm/entities/account";

@Entity("categories")
class Category {
    @PrimaryColumn()
    id?: string;

    @Column()
    name: string;

    @ManyToOne(() => Account)
    @JoinColumn({ name: "account_id", nullable: true })
    account: Account;
    accountId: string;

    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4()
        }
    }
}

export { Category }