import { MigrationInterface, QueryRunner } from 'typeorm';

export class ServicesAppointmentsMigration1624585091085
  implements MigrationInterface
{
  name = 'ServicesAppointmentsMigration1624585091085';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "services_appointment" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "services" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_d8471e785a42b8145e5ab439b81" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "services_appointment"`);
  }
}
