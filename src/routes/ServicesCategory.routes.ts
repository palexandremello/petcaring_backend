import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import ServicesCategoryRepository from '../repositories/ServicesCategoryRepository';
const ServicesCategoryRouter = Router();

ServicesCategoryRouter.get('/', async (request, response) => {
  const servicesCategoryRepository = getCustomRepository(
    ServicesCategoryRepository,
  );

  const categories = await servicesCategoryRepository.find();

  return response.json(categories);
});

ServicesCategoryRouter.post('/', async (request, response) => {
  const servicesCategoryRepository = getCustomRepository(
    ServicesCategoryRepository,
  );
  await servicesCategoryRepository.save(request.body);
  return response.status(200).json({ message: 'Created with sucessfully' });
});
export default ServicesCategoryRouter;
