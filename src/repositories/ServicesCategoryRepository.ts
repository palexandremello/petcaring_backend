import { EntityRepository, Repository } from 'typeorm';

import ServiceCategory from '../models/ServicesCategory';

@EntityRepository(ServiceCategory)
class ServicesCategoryRepository extends Repository<ServiceCategory> {}

export default ServicesCategoryRepository;
