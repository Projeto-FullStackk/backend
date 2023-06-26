import { randomUUID } from 'node:crypto';

export class Comment {
  readonly id: string;
  comment: string;
  createdAt: Date;
  userId: string;
  adsId: string;

  constructor() {
    this.id = randomUUID();
    this.createdAt = new Date();
  }
}
