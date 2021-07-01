import { EntityRepository, Repository } from 'typeorm';
import BodyWeightPet from '../models/BodyWeightPet';
@EntityRepository(BodyWeightPet)
class BodyWeightPetRepository extends Repository<BodyWeightPet> {}

export default BodyWeightPetRepository;
