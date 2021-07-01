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
import ServiceCategory from './ServicesCategory';

@Entity('appointment_pets')
class AppointmentsPets {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  start_time: Date;

  @Column()
  end_time: Date;

  @Column()
  title: string;

  @ManyToOne(() => Pet, pet => pet.weight)
  @JoinColumn({ name: 'pet_id' })
  pet: Pet;

  @ManyToOne(
    () => ServiceCategory,
    service_category => service_category.appointment,
    {
      eager: true,
    },
  )
  @JoinColumn({ name: 'service_id' })
  service: ServiceCategory;

  @CreateDateColumn({ name: 'created_at' })
  cratedAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default AppointmentsPets;
