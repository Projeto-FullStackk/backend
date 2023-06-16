import { Exclude } from 'class-transformer';
import { randomUUID } from 'crypto';

export class Address {
  zipCode: string;
  state: string;
  city: string;
  country: string;
  street: string;
  number: string;
  complement?: string;
}

export class User {
  readonly id: string;
  name: string;

  @Exclude()
  password: string;
  email: string;
  phone: string;
  cpf: string;
  birthDate: string | Date;
  isSeller?: boolean;
  readonly isAdmin: boolean;
  readonly createdAt: Date;
  Address: Address;
  description: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = new Date();
  }
}
