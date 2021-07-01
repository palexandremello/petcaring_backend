import {MigrationInterface, QueryRunner} from "typeorm";

export class ServicesAppointmentsRelations1624737220637 implements MigrationInterface {
    name = 'ServicesAppointmentsRelations1624737220637'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment_pets" DROP CONSTRAINT "FK_494b53f8ef9718898e1637be13e"`);
        await queryRunner.query(`ALTER TABLE "services_appointment" DROP COLUMN "services"`);
        await queryRunner.query(`ALTER TABLE "appointment_pets" DROP COLUMN "services_id"`);
        await queryRunner.query(`ALTER TABLE "services_appointment" ADD "service_name" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "services_appointment" ADD "appointment_id" uuid`);
        await queryRunner.query(`ALTER TABLE "services_appointment" ADD CONSTRAINT "FK_0d5c5fd00248ec312f18a2cecb7" FOREIGN KEY ("appointment_id") REFERENCES "appointment_pets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "services_appointment" DROP CONSTRAINT "FK_0d5c5fd00248ec312f18a2cecb7"`);
        await queryRunner.query(`ALTER TABLE "services_appointment" DROP COLUMN "appointment_id"`);
        await queryRunner.query(`ALTER TABLE "services_appointment" DROP COLUMN "service_name"`);
        await queryRunner.query(`ALTER TABLE "appointment_pets" ADD "services_id" uuid`);
        await queryRunner.query(`ALTER TABLE "services_appointment" ADD "services" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "appointment_pets" ADD CONSTRAINT "FK_494b53f8ef9718898e1637be13e" FOREIGN KEY ("services_id") REFERENCES "services_appointment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
