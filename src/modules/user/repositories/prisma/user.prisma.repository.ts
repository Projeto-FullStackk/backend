import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user.repository';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { User } from '../../entities/user.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';
import { Address } from '../../entities/address.entity';

@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}
  async create(data: CreateUserDto): Promise<User> {
    const { address, ...others } = data;
    const user = new User();
    const addressNew = new Address();

    Object.assign(addressNew, { address });
    Object.assign(user, { ...others });

    const newUser = await this.prisma.user.create({
      data: { ...user, address: { create: addressNew } },
      include: {
        address: {
          select: {
            zipCode: true,
            state: true,
            city: true,
            country: true,
            street: true,
            number: true,
            complement: true,
          },
        },
      },
    });

    return newUser;
  }
  async findAll(userLoggedId: string): Promise<User[]> {
    const userLoggedIn = await this.prisma.user.findFirst({
      where: { id: userLoggedId },
    });
    if (userLoggedIn.isAdmin === false) {
      throw new Error('user is not an admin');
    }
    const users = await this.prisma.user.findMany();
    return plainToInstance(User, users);
  }
  findOne(id: string, userLoggedId: string): Promise<User> {
    throw new Error('Method not implemented.');
  }
  // async findByEmail(email: string): Promise<User> {
  //   // const user = await this.prisma.user.findFirst({
  //   //   where: { email: email },
  //   // });
  //   // return user;
  // }

  update(id: string, updateUserDto: UpdateUserDto): Promise<User> {
    throw new Error('Method not implemented.');
  }
  remove(id: string): User | Promise<User> {
    throw new Error('Method not implemented.');
  }
}
