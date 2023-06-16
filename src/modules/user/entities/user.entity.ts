import { randomUUID } from 'crypto';

export interface IAddress {
  zipCode: string;
  state: string;
  city: string;
  street: string;
  number: string;
  complement?: string;
}

export class User {
  readonly id: string;
  name: string;
  password: string;
  email: string;
  phone: string;
  cpf: string;
  birthDate: string;
  isSeller?: boolean;
  readonly isAdmin: boolean;
  readonly createdAt: string;
  address: IAddress;
  description: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = String(new Date());
  }
}
