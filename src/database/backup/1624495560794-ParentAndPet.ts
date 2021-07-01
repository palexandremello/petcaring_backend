import {MigrationInterface, QueryRunner} from "typeorm";

export class ParentAndPet1624495560794 implements MigrationInterface {
    name = 'ParentAndPet1624495560794'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "parent" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "email" character varying NOT NULL, "phone" character varying NOT NULL, "notes" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "UQ_9158391af7b8ca4911efaad8a73" UNIQUE ("email"), CONSTRAINT "PK_bf93c41ee1ae1649869ebd05617" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "species_pets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "species_name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_8260d1c0f98820159d96693fa26" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "pet" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "birth_date" TIMESTAMP NOT NULL, "notes" character varying, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), "parent_id" uuid, "specie_id" uuid, "breed_id" uuid, CONSTRAINT "PK_b1ac2e88e89b9480e0c5b53fa60" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "breed_pets" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "breed_name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_abec728ced45b115d57e3048740" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "vaccine_card" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "created_at" TIMESTAMP NOT NULL DEFAULT now(), "updated_at" TIMESTAMP NOT NULL DEFAULT now(), CONSTRAINT "PK_07b5d3c0b16dd3cddd36df61c70" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_5e312d759ea1886368aaaab92ab" FOREIGN KEY ("parent_id") REFERENCES "parent"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_778fea0a3f015977f9241bc5af7" FOREIGN KEY ("specie_id") REFERENCES "species_pets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "pet" ADD CONSTRAINT "FK_68847e00bd32e8e3ec835e397c8" FOREIGN KEY ("breed_id") REFERENCES "breed_pets"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_68847e00bd32e8e3ec835e397c8"`);
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_778fea0a3f015977f9241bc5af7"`);
        await queryRunner.query(`ALTER TABLE "pet" DROP CONSTRAINT "FK_5e312d759ea1886368aaaab92ab"`);
        await queryRunner.query(`DROP TABLE "vaccine_card"`);
        await queryRunner.query(`DROP TABLE "breed_pets"`);
        await queryRunner.query(`DROP TABLE "pet"`);
        await queryRunner.query(`DROP TABLE "species_pets"`);
        await queryRunner.query(`DROP TABLE "parent"`);
    }

}
