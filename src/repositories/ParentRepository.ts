import { EntityRepository, Repository } from 'typeorm';
import ParentUser from '../models/ParentUser';

@EntityRepository(ParentUser)
class ParentRepository extends Repository<ParentUser> {}

export default ParentRepository;
