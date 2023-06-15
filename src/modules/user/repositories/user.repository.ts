import { CreateUserDto, CreateAddressDto } from '../dto/create-user.dto';
import { UpdateUserDto } from '../dto/update-user.dto';
import { User } from '../entities/user.entity';

export abstract class UserRepository {
  abstract create(createUserDto: CreateUserDto): Promise<User> | User;
  abstract findAll(userLoggedId: string): Promise<User[] | User> | User[];
  abstract findOne(id: string, userLoggedId: string): Promise<User> | User;
  // abstract findByEmail(email: string): Promise<User> | User;
  abstract update(
    id: string,
    updateUserDto: UpdateUserDto,
  ): Promise<User> | User;
  abstract remove(id: string): Promise<User> | User;
}
