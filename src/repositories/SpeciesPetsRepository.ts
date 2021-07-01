import { EntityRepository, Repository } from 'typeorm';
import SpeciesPets from '../models/SpeciesPets';

@EntityRepository(SpeciesPets)
class SpeciesPetsRepository extends Repository<SpeciesPets> {}

export default SpeciesPetsRepository;
