import { randomUUID } from 'crypto';

export class Address {
  readonly id: string;
  zipCode: string;
  state: string;
  city: string;
  country: string;
  street: string;
  number: string;
  complement?: string;

  constructor() {
    this.id = randomUUID();
  }
}
