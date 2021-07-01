import {MigrationInterface, QueryRunner} from "typeorm";

export class ServicesAppointments1624736365070 implements MigrationInterface {
    name = 'ServicesAppointments1624736365070'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment_pets" DROP CONSTRAINT "FK_1dc59bc86dcbbc56a05bf292b75"`);
        await queryRunner.query(`ALTER TABLE "appointment_pets" RENAME COLUMN "servicesId" TO "services_id"`);
        await queryRunner.query(`ALTER TABLE "appointment_pets" ADD CONSTRAINT "FK_494b53f8ef9718898e1637be13e" FOREIGN KEY ("services_id") REFERENCES "services_appointment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment_pets" DROP CONSTRAINT "FK_494b53f8ef9718898e1637be13e"`);
        await queryRunner.query(`ALTER TABLE "appointment_pets" RENAME COLUMN "services_id" TO "servicesId"`);
        await queryRunner.query(`ALTER TABLE "appointment_pets" ADD CONSTRAINT "FK_1dc59bc86dcbbc56a05bf292b75" FOREIGN KEY ("servicesId") REFERENCES "services_appointment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
