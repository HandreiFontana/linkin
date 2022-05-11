import {
    Column,
    CreateDateColumn,
    Entity,
    JoinColumn,
    ManyToOne,
    PrimaryColumn
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { Account } from "./account";

@Entity("accounts_tokens")
class AccountTokens {

    @PrimaryColumn()
    id: string;

    @Column({ name: "refresh_token", nullable: true })
    refreshToken: string;

    @ManyToOne(() => Account, { nullable: true, eager: true })
    @JoinColumn({ name: "account_id", referencedColumnName: 'id' })
    accountId: string;
    account: Account;

    @Column({ name: "expires_date", nullable: true })
    expiresDate: Date;

    @CreateDateColumn({ name: "created_at", nullable: true })
    createdAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { AccountTokens }