import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user.repository';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { User } from '../../entities/user.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  create(createUserDto: CreateUserDto): User | Promise<User> {
    throw new Error('Method not implemented.');
  }
  async findAll(userLoggedId: string): Promise<User | User[]> {
    const userLoggedIn = await this.prisma.user.findFirst({
      where: { id: userLoggedId },
    });
    if (userLoggedIn.isAdmin === false) {
      throw new Error('user is not an admin');
    }
    const users = await this.prisma.user.findMany();
    return plainToInstance(User, users);
  }
  findOne(id: string, userLoggedId: string): User | Promise<User> {
    throw new Error('Method not implemented.');
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { email: email },
    });
    return user;
  }

  update(id: string, updateUserDto: UpdateUserDto): User | Promise<User> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): User | Promise<User> {
    throw new Error('Method not implemented.');
  }
}
