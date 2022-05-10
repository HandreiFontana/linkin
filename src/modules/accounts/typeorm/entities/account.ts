import { Column, CreateDateColumn, Entity, PrimaryColumn } from 'typeorm';
import { v4 as uuidV4 } from 'uuid';

@Entity("accounts")
class Account {

    @PrimaryColumn()
    id: string;

    @Column({ name: 'username', nullable: true })
    username: string;

    @Column({ name: 'password', nullable: true })
    password: string;

    @Column({ name: 'email', nullable: true })
    email: string;

    @CreateDateColumn({ name: 'created_at', nullable: true })
    createdAt: Date;

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { Account }