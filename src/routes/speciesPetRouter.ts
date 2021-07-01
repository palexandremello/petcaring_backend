import { Router } from 'express';
import SpeciesPetsRepository from '../repositories/SpeciesPetsRepository';
import { getCustomRepository } from 'typeorm';

const SpeciesPetsRouter = Router();

SpeciesPetsRouter.get('/', async (request, response) => {
  const speciesPetRepository = getCustomRepository(SpeciesPetsRepository);

  const species = await speciesPetRepository.find();

  return response.json(species);
});

SpeciesPetsRouter.post('/', async (request, response) => {
  const speciesPetRepository = getCustomRepository(SpeciesPetsRepository);

  await speciesPetRepository.save(request.body);
  return response.status(200).json(request.body);
});

export default SpeciesPetsRouter;
