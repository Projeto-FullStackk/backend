import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAddressDto, CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    // const findUSer = await this.userRepository.findByEmail(createUserDto.email);
    // if (findUSer) {
    //   throw new ConflictException('User already exists');
    // }
    const user = await this.userRepository.create(createUserDto);

    return user;
  }

  async findAll(userLoggedId: string) {
    const users = await this.userRepository.findAll(userLoggedId);
    return users;
  }

  async findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  // async findByEmail(email: string) {
  //   const user = await this.userRepository.findByEmail(email);
  //   return user;
  // }

  async update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  async remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
