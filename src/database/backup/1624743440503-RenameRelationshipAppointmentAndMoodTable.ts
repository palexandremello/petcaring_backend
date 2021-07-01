import { MigrationInterface, QueryRunner } from 'typeorm';

export class RenameRelationshipAppointmentAndMoodTable1624743440503
  implements MigrationInterface
{
  name = 'RenameRelationshipAppointmentAndMoodTable1624743440503';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "mood_pets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_98a805d89409392c88df9bfa1eb" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "mood_pets"`);
  }
}
