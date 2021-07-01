import {
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  OneToMany,
  JoinColumn,
} from 'typeorm';
import Pet from './Pet';

@Entity('body_weight_pet')
class BodyWeightPet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'float', width: 200 })
  weight: number;

  @ManyToOne(() => Pet, pet => pet.weight)
  @JoinColumn({ name: 'pet_id' })
  pet: Pet;

  @CreateDateColumn({ name: 'created_at' })
  cratedAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default BodyWeightPet;
