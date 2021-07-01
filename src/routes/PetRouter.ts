import { Router } from 'express';
import PetRepository from '../repositories/PetRepository';
import { getCustomRepository } from 'typeorm';

const PetRouter = Router();

PetRouter.get('/', async (request, response) => {
  const petRepositories = getCustomRepository(PetRepository);

  const user = await petRepositories.find();

  return response.json(user);
});

PetRouter.post('/', async (request, response) => {
  const petRepositories = getCustomRepository(PetRepository);
  const { parent_id, specie_id, breed_id } = request.headers;
  const { name, birth_date } = request.body;
  const newPet = {
    name,
    birth_date,
    parent: parent_id,
    specie_pet: specie_id,
    breed: breed_id,
  };
  const pet = await petRepositories.save(newPet);
  return response.status(200).json(pet);
});

export default PetRouter;
