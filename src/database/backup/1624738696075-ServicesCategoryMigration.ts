import { MigrationInterface, QueryRunner } from 'typeorm';

export class ServicesCategoryMigration1624738696075
  implements MigrationInterface
{
  name = 'ServicesCategoryMigration1624738696075';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "service" DROP CONSTRAINT "FK_a52ed144010ffdd7d13bb40bb6b"`,
    );
    await queryRunner.query(
      `ALTER TABLE "service" DROP COLUMN "service_category_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "services_appointment" ADD "service_id" uuid`,
    );
    await queryRunner.query(
      `ALTER TABLE "services_appointment" ADD CONSTRAINT "FK_1133784e217a485735333a3ffdc" FOREIGN KEY ("service_id") REFERENCES "service"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "services_appointment" DROP CONSTRAINT "FK_1133784e217a485735333a3ffdc"`,
    );
    await queryRunner.query(
      `ALTER TABLE "services_appointment" DROP COLUMN "service_id"`,
    );
    await queryRunner.query(
      `ALTER TABLE "service" ADD "service_category_id" uuid`,
    );
    await queryRunner.query(
      `ALTER TABLE "service" ADD CONSTRAINT "FK_a52ed144010ffdd7d13bb40bb6b" FOREIGN KEY ("service_category_id") REFERENCES "services_appointment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`,
    );
  }
}
