import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

import Pet from './Pet';

@Entity('breed_pets')
class BreedPets {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  breed_name: string;

  @OneToMany(() => Pet, pet => pet.breed)
  pet: Pet;

  @CreateDateColumn({ name: 'created_at' })
  cratedAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default BreedPets;
