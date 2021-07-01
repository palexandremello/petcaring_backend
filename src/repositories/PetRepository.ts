import { EntityRepository, Repository } from 'typeorm';

import Pet from '../models/Pet';

@EntityRepository(Pet)
class PetRepository extends Repository<Pet> {}

export default PetRepository;
