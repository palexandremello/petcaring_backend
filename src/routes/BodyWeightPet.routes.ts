import { Router } from 'express';
import { getCustomRepository } from 'typeorm';
import BodyWeightPetRepository from '../repositories/BodyWeightPetRepository';
const BodyWeightPetRouter = Router();

BodyWeightPetRouter.get('/', async (request, response) => {
  const bodyWeightPetRepository = getCustomRepository(BodyWeightPetRepository);

  const breed = await bodyWeightPetRepository.find();

  return response.json(breed);
});

BodyWeightPetRouter.post('/', async (request, response) => {
  const bodyWeightPetRepository = getCustomRepository(BodyWeightPetRepository);
  const { parent_id, pet_id } = request.headers;
  const { weight } = request.body;

  const newBodyWeightPet = {
    weight,
    pet: pet_id,
  };
  console.log(newBodyWeightPet);
  const pet = await bodyWeightPetRepository.save(newBodyWeightPet);
  return response.status(200).json(pet);
});
export default BodyWeightPetRouter;
