import { MigrationInterface, QueryRunner } from 'typeorm';

export class ServicesCategoryMigration1624738112668
  implements MigrationInterface
{
  name = 'ServicesCategoryMigration1624738112668';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "services_appointment" RENAME COLUMN "service_name" TO "title"`,
    );
    await queryRunner.query(
      `CREATE TABLE "service" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "service_name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "service_category_id" uuid, CONSTRAINT "PK_85a21558c006647cd76fdce044b" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "service" ADD CONSTRAINT "FK_a52ed144010ffdd7d13bb40bb6b" FOREIGN KEY ("service_category_id") REFERENCES "services_appointment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "service" DROP CONSTRAINT "FK_a52ed144010ffdd7d13bb40bb6b"`,
    );
    await queryRunner.query(`DROP TABLE "service"`);
    await queryRunner.query(
      `ALTER TABLE "services_appointment" RENAME COLUMN "title" TO "service_name"`,
    );
  }
}
