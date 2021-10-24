import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1624750742271 implements MigrationInterface {
    name = 'Migrations1624750742271'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "breed_pets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "breed_name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_abec728ced45b115d57e3048740" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "parent" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "notes" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_9158391af7b8ca4911efaad8a73" UNIQUE ("email"), CONSTRAINT "PK_bf93c41ee1ae1649869ebd05617" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "species_pets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "species_name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8260d1c0f98820159d96693fa26" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "body_weight_pet" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "weight" double precision NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "pet_id" uuid, CONSTRAINT "PK_a0650c4b72d28cc2cc61a58c359" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pet" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "birth_date" TIMESTAMP NOT NULL, "notes" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "parent_id" uuid, "specie_id" uuid, "breed_id" uuid, CONSTRAINT "PK_b1ac2e88e89b9480e0c5b53fa60" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "service" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "service_name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_85a21558c006647cd76fdce044b" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "appointment_pets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "start_time" TIMESTAMP NOT NULL, "end_time" TIMESTAMP NOT NULL, "title" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "pet_id" uuid, "service_id" uuid, CONSTRAINT "PK_69c8ade0bdb222d3bcc3557f841" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "mood_pets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_98a805d89409392c88df9bfa1eb" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vaccine_card" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_07b5d3c0b16dd3cddd36df61c70" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "body_weight_pet" ADD CONSTRAINT "FK_4ada4639ad1001e10b52d589dd8" FOREIGN KEY ("pet_id") REFERENCES "pet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_5e312d759ea1886368aaaab92ab" FOREIGN KEY ("parent_id") REFERENCES "parent"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_778fea0a3f015977f9241bc5af7" FOREIGN KEY ("specie_id") REFERENCES "species_pets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_68847e00bd32e8e3ec835e397c8" FOREIGN KEY ("breed_id") REFERENCES "breed_pets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointment_pets" ADD CONSTRAINT "FK_619c3da27d8b21bf134e3892f94" FOREIGN KEY ("pet_id") REFERENCES "pet"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "appointment_pets" ADD CONSTRAINT "FK_d2f0e1d2c2cc98ecc536dfd1722" FOREIGN KEY ("service_id") REFERENCES "service"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "appointment_pets" DROP CONSTRAINT "FK_d2f0e1d2c2cc98ecc536dfd1722"`);
        await queryRunner.query(`ALTER TABLE "appointment_pets" DROP CONSTRAINT "FK_619c3da27d8b21bf134e3892f94"`);
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_68847e00bd32e8e3ec835e397c8"`);
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_778fea0a3f015977f9241bc5af7"`);
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_5e312d759ea1886368aaaab92ab"`);
        await queryRunner.query(`ALTER TABLE "body_weight_pet" DROP CONSTRAINT "FK_4ada4639ad1001e10b52d589dd8"`);
        await queryRunner.query(`DROP TABLE "vaccine_card"`);
        await queryRunner.query(`DROP TABLE "mood_pets"`);
        await queryRunner.query(`DROP TABLE "appointment_pets"`);
        await queryRunner.query(`DROP TABLE "service"`);
        await queryRunner.query(`DROP TABLE "pet"`);
        await queryRunner.query(`DROP TABLE "body_weight_pet"`);
        await queryRunner.query(`DROP TABLE "species_pets"`);
        await queryRunner.query(`DROP TABLE "parent"`);
        await queryRunner.query(`DROP TABLE "breed_pets"`);
    }

}
