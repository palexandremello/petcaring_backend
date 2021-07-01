import AppointmentsPets from '../models/AppointmentPets';
import { EntityRepository, Repository } from 'typeorm';

@EntityRepository(AppointmentsPets)
class AppointmentsPetRepository extends Repository<AppointmentsPets> {}

export default AppointmentsPetRepository;
