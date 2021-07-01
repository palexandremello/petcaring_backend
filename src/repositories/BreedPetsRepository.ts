import { EntityRepository, Repository } from 'typeorm';
import BreedPets from '../models/BreedPets';

@EntityRepository(BreedPets)
class BreedPetsRepository extends Repository<BreedPets> {}

export default BreedPetsRepository;
