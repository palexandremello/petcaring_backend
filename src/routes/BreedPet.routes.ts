import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import BreedPetsRepository from '../repositories/BreedPetsRepository';
const BreedPetsRouter = Router();

BreedPetsRouter.get('/', async (request, response) => {
  const breedPetsRepository = getCustomRepository(BreedPetsRepository);

  const breed = await breedPetsRepository.find();

  return response.json(breed);
});

BreedPetsRouter.post('/', async (request, response) => {
  const breedPetsRepository = getCustomRepository(BreedPetsRepository);

  await breedPetsRepository.save(request.body);
  return response.status(200).json(request.body);
});

export default BreedPetsRouter;
