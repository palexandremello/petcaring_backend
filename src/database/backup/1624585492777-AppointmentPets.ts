import {MigrationInterface, QueryRunner} from "typeorm";

export class AppointmentPets1624585492777 implements MigrationInterface {
    name = 'AppointmentPets1624585492777'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "appointment_pets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "start_time" TIMESTAMP NOT NULL, "end_time" TIMESTAMP NOT NULL, "title" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "pet_id" uuid, CONSTRAINT "PK_69c8ade0bdb222d3bcc3557f841" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "appointment_pets" ADD CONSTRAINT "FK_619c3da27d8b21bf134e3892f94" FOREIGN KEY ("pet_id") REFERENCES "pet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment_pets" DROP CONSTRAINT "FK_619c3da27d8b21bf134e3892f94"`);
        await queryRunner.query(`DROP TABLE "appointment_pets"`);
    }

}
