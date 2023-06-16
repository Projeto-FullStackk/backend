import { Injectable } from '@nestjs/common';
import { UserRepository } from '../user.repository';
import { CreateUserDto } from '../../dto/create-user.dto';
import { UpdateUserDto } from '../../dto/update-user.dto';
import { User } from '../../entities/user.entity';
import { PrismaService } from 'src/database/prisma.service';
import { plainToInstance } from 'class-transformer';
import { Prisma } from '@prisma/client';

@Injectable()
export class UserPrismaRepository implements UserRepository {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserDto): Promise<User> {
    const { address, birthDate, ...others } = data;
    const user = new User();
    Object.assign(user, { ...others, isAdmin: false });

    const newUser = await this.prisma.user.create({
      data: {
        ...user,
        birthDate: new Date(birthDate),
        Address: {
          create: { ...address },
        },
      },
      include: {
        Address: {
          select: {
            id: false,
            zipCode: true,
            state: true,
            city: true,
            street: true,
            number: true,
            complement: true,
            country: true,
          },
        },
      },
    });

    return plainToInstance(User, newUser);
  }

  async findAll(userLoggedId: string): Promise<User[]> {
    const userLoggedIn = await this.prisma.user.findFirst({
      where: { id: userLoggedId },
      include: {
        Address: true,
        ads: true,
      },
    });
    if (userLoggedIn.isAdmin === false) {
      return plainToInstance(User, [userLoggedIn]);
    }
    const users = await this.prisma.user.findMany();
    return plainToInstance(User, users);
  }

  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: id },
      include: {
        Address: true,
        ads: true,
      },
    });
    return plainToInstance(User, user);
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { email: email },
      include: {
        Address: true,
        ads: true,
      },
    });

    return user;
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const { address, birthDate, ...others } = data;
    const updateData: Prisma.UserUpdateInput = { ...others };

    if (birthDate) {
      updateData.birthDate = new Date(birthDate);
    }

    if (address) {
      updateData.Address = {
        update: { ...address },
      };
    }

    const userUpdate = await this.prisma.user.update({
      where: {
        id: id,
      },
      data: updateData,
      include: {
        Address: true,
      },
    });

    return plainToInstance(User, userUpdate);
  }

  async remove(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id: id } });
  }
}
