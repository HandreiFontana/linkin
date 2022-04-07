import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateLink1649350535697 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "links",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "title",
                        type: "varchar",
                    },
                    {
                        name: "description",
                        type: "varchar",
                    },
                    {
                        name: "url",
                        type: "varchar",
                    },
                    {
                        name: "category",
                        type: "varchar",
                    },
                    {
                        name: "account_id",
                        type: "uuid"
                    },
                    {
                        name: "isPrivate",
                        type: "boolean",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKCreateLink",
                        referencedTableName: "accounts",
                        referencedColumnNames: ["id"],
                        columnNames: ["account_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    },
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("links")
    }

}
