import ParentUser from '@models/ParentUser';

interface IParentRepositoryDTO {
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
}

interface IParentRepository {
  findByEmail(email: string): ParentUser;
  list(): ParentUser[];
  create({ first_name, last_name, email, phone }: IParentRepositoryDTO): void;
}

export { IParentRepositoryDTO, IParentRepository };
