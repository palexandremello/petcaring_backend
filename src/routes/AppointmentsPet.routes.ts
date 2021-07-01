import { Router } from 'express';
import AppointmentsPetRepository from '../repositories/AppointmentsPetRepository';
import { getCustomRepository } from 'typeorm';

const AppointmentsPetRouter = Router();

AppointmentsPetRouter.get('/', async (request, response) => {
  const appointmentsPetRepository = getCustomRepository(
    AppointmentsPetRepository,
  );

  const appointments = await appointmentsPetRepository.find();

  return response.json(appointments);
});

AppointmentsPetRouter.post('/', async (request, response) => {
  const appointmentsPetRepository = getCustomRepository(
    AppointmentsPetRepository,
  );
  const { service_id, pet_id } = request.headers;
  const { start_time, end_time, title } = request.body;
  const newAppointment = {
    start_time,
    end_time,
    title,
    pet: pet_id,
    service: service_id,
  };
  const appointment = await appointmentsPetRepository.save(newAppointment);
  return response.status(200).json(appointment);
});

export default AppointmentsPetRouter;
