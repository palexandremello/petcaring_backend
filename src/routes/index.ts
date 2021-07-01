import { Router } from 'express';
import SpeciesPetsRouter from './speciesPetRouter';
import ParentRouter from './ParentRouter';
import PetRouter from './PetRouter';
import BreedPetsRouter from './BreedPet.routes';
import BodyWeightPetRouter from './BodyWeightPet.routes';
import ServicesCategoryRouter from './ServicesCategory.routes';
import AppointmentsPetRouter from './AppointmentsPet.routes';
const routes = Router();

routes.use('/species', SpeciesPetsRouter);
routes.use('/users', ParentRouter);
routes.use('/pet', PetRouter);
routes.use('/breed', BreedPetsRouter);
routes.use('/weight_pet', BodyWeightPetRouter);
routes.use('/categories', ServicesCategoryRouter);
routes.use('/appointments', AppointmentsPetRouter);
export default routes;
