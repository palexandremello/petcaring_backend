import {
  Column,
  Entity,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  JoinColumn,
  PrimaryGeneratedColumn,
  OneToOne,
} from 'typeorm';
import BreedPets from './BreedPets';
import ParentUser from './ParentUser';
import SpeciesPets from './SpeciesPets';
import BodyWeightPet from './BodyWeightPet';
import AppointmentsPets from './AppointmentPets';
@Entity('pet')
class Pet {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @ManyToOne(() => ParentUser, parent => parent.pets)
  @JoinColumn({ name: 'parent_id' })
  parent: ParentUser;

  @ManyToOne(() => SpeciesPets, speciepet => speciepet.pet, { eager: true })
  @JoinColumn({ name: 'specie_id' })
  specie_pet: SpeciesPets;

  @ManyToOne(() => BreedPets, breed_pet => breed_pet.pet, { eager: true })
  @JoinColumn({ name: 'breed_id' })
  breed: BreedPets;

  @OneToMany(type => BodyWeightPet, body_weight_pet => body_weight_pet.pet, {
    eager: true,
  })
  weight: BodyWeightPet[];

  @OneToMany(type => AppointmentsPets, appointment_pet => appointment_pet.pet, {
    eager: true,
  })
  appointment: AppointmentsPets[];

  @Column()
  birth_date: Date;

  @Column({ nullable: true })
  notes: string;

  @CreateDateColumn({ name: 'created_at' })
  cratedAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default Pet;
