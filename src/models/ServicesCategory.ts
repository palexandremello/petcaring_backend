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
import AppointmentsPets from './AppointmentPets';

@Entity('service')
class ServiceCategory {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  service_name: string;

  @OneToMany(() => AppointmentsPets, appointment_pet => appointment_pet.service)
  appointment: AppointmentsPets;

  @CreateDateColumn({ name: 'created_at' })
  cratedAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: Date;
}

export default ServiceCategory;
