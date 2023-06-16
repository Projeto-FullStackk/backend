import { randomUUID } from 'node:crypto';

export class Ad {
  readonly id: string;
  brand: string;
  name: string;
  year: number;
  fuel: string;
  km: string;
  color: string;
  priceTf: number;
  price: number;
  description: string;
  coverImage: string;
  firstImage?: string;
  secondImage?: string;
  thirdImage?: string;
  fourthImage?: string;
  fifthImage?: string;
  sixthImage?: string;
  userId: string;
  published: boolean;

  constructor() {
    this.id = randomUUID();
  }
}
