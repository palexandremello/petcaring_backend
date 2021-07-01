import {MigrationInterface, QueryRunner} from "typeorm";

export class WeightPetMigration1624503821334 implements MigrationInterface {
    name = 'WeightPetMigration1624503821334'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_87b5f891607c337fdf68e16dd9d"`);
        await queryRunner.query(`ALTER TABLE "pet" DROP COLUMN "weight_id"`);
        await queryRunner.query(`ALTER TABLE "body_weight_pet" ADD "pet_id" uuid`);
        await queryRunner.query(`ALTER TABLE "body_weight_pet" ADD CONSTRAINT "FK_4ada4639ad1001e10b52d589dd8" FOREIGN KEY ("pet_id") REFERENCES "pet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "body_weight_pet" DROP CONSTRAINT "FK_4ada4639ad1001e10b52d589dd8"`);
        await queryRunner.query(`ALTER TABLE "body_weight_pet" DROP COLUMN "pet_id"`);
        await queryRunner.query(`ALTER TABLE "pet" ADD "weight_id" uuid`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_87b5f891607c337fdf68e16dd9d" FOREIGN KEY ("weight_id") REFERENCES "body_weight_pet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
