import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
} from 'typeorm';
import Pet from './Pet';

@Entity('species_pets')
class SpeciesPets {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  species_name: string;

  @OneToMany(() => Pet, pet => pet.specie_pet)
  pet: Pet;

  @CreateDateColumn({ name: 'created_at' })
  cratedAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default SpeciesPets;
