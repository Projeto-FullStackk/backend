import { randomUUID } from 'crypto';

export class User {
  readonly id: string;
  name: string;
  password: string;
  isAdmin: boolean;
  email: string;
  phone: string;
  cpf: string;
  birthDate: Date;
  isSeller?: boolean;
  addressId: string;
  description: string;

  constructor() {
    this.id = randomUUID();
  }
}
