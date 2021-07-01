import {MigrationInterface, QueryRunner} from "typeorm";

export class AppointmentsRelations1624592782445 implements MigrationInterface {
    name = 'AppointmentsRelations1624592782445'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment_pets" ADD "servicesId" uuid`);
        await queryRunner.query(`ALTER TABLE "appointment_pets" ADD CONSTRAINT "FK_1dc59bc86dcbbc56a05bf292b75" FOREIGN KEY ("servicesId") REFERENCES "services_appointment"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment_pets" DROP CONSTRAINT "FK_1dc59bc86dcbbc56a05bf292b75"`);
        await queryRunner.query(`ALTER TABLE "appointment_pets" DROP COLUMN "servicesId"`);
    }

}
