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
  async create(data: CreateUserDto): Promise<User> {
    const { address, ...others } = data;
    const user = new User();
    Object.assign(user, { ...others });

    const newUser = await this.prisma.user.create({
      data: { ...user, address: { ...address } },
    });
    console.log(newUser);
    return plainToInstance(User, newUser);
  }
  async findAll(): Promise<User[]> {
    // const userLoggedIn = await this.prisma.user.findFirst({
    //   where: { id: userLoggedId },
    // });
    // if (userLoggedIn.isAdmin === false) {
    //   throw new Error('user is not an admin');
    // }
    const users = await this.prisma.user.findMany();
    return plainToInstance(User, users);
  }
  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({
      where: { id: id },
    });
    return plainToInstance(User, user);
  }
  async findByEmail(email: string): Promise<User> {
    const user = await this.prisma.user.findFirst({
      where: { email: email },
    });
    return plainToInstance(User, user);
  }

  async update(id: string, data: UpdateUserDto): Promise<User> {
    const userUpdate = await this.prisma.user.update({
      where: {
        id: id,
      },
      data: { ...data, address: JSON.stringify(data.address) },
    });

    return plainToInstance(User, userUpdate);
  }
  async remove(id: string): Promise<void> {
    await this.prisma.user.delete({ where: { id: id } });
  }
}
