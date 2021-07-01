import { Router } from 'express';
import ParentRepository from '../repositories/ParentRepository';
import { getCustomRepository } from 'typeorm';
//{ relations: ['pets'] }
const ParentRouter = Router();

ParentRouter.get('/', async (request, response) => {
  const parentRepositories = getCustomRepository(ParentRepository);

  const user = await parentRepositories.find();

  return response.json(user);
});

ParentRouter.post('/', async (request, response) => {
  const parentRepositories = getCustomRepository(ParentRepository);

  const user = await parentRepositories.save(request.body);
  return response.status(200).json(user);
});

export default ParentRouter;
