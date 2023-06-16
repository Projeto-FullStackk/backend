import { ConflictException, Injectable } from '@nestjs/common';
import { CreateAddressDto, CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';
import { UserRepository } from './repositories/user.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  async create(createUserDto: CreateUserDto) {
    const findUSer = await this.userRepository.findByEmail(createUserDto.email);
    if (findUSer) {
      throw new ConflictException('User already exists');
    }
    const user = await this.userRepository.create(createUserDto);

    return user;
  }

  async findAll() {
    const users = await this.userRepository.findAll();
    return users;
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne(id);
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email);
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const newUser = await this.userRepository.update(id, updateUserDto);
    return newUser;
  }

  async remove(id: string) {
    return await this.userRepository.remove(id);
  }
}
