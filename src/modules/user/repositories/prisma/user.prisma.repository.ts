import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user.repository';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { User } from '../../entities/user.entity';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto): User | Promise<User> {
    throw new Error('Method not implemented.');
  }
  findAll(userLoggedId: string): User[] | Promise<User | User[]> {
    throw new Error('Method not implemented.');
  }
  findOne(id: string, userLoggedId: string): User | Promise<User> {
    throw new Error('Method not implemented.');
  }
  update(id: string, updateUserDto: UpdateUserDto): User | Promise<User> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): User | Promise<User> {
    throw new Error('Method not implemented.');
  }
}
