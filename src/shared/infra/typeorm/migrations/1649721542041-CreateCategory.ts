import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateCategory1649721542041 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "categories",
                columns: [
                    {
                        name: "id",
                        type: "uuid",
                        isPrimary: true,
                    },
                    {
                        name: "name",
                        type: "varchar",
                    },
                    {
                        name: "account_id",
                        type: "uuid",
                    },
                    {
                        name: "created_at",
                        type: "timestamp",
                        default: "now()",
                    }
                ],
                foreignKeys: [
                    {
                        name: "FKCreateCategory",
                        referencedTableName: "accounts",
                        referencedColumnNames: ["id"],
                        columnNames: ["account_id"],
                        onDelete: "CASCADE",
                        onUpdate: "CASCADE",
                    }
                ]
            })
        )
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("categories")
    }

}
