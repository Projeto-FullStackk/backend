import { randomUUID } from 'node:crypto';
import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserRepository } from './repositories/user.repository';
import { MailService } from 'src/utils/mail.service';

@Injectable()
export class UserService {
  constructor(
    private userRepository: UserRepository,
    private mailService: MailService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const findUser = await this.userRepository.findByEmail(createUserDto.email);
    if (findUser) {
      throw new ConflictException('User already exists!');
    }
    const user = await this.userRepository.create(createUserDto);

    return user;
  }

  async findAll(userLoggedId: string) {
    const users = await this.userRepository.findAll(userLoggedId);
    return users;
  }

  async findOne(id: string) {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found!');
    }
    return user;
  }

  async findByEmail(email: string) {
    const user = await this.userRepository.findByEmail(email);
    return user;
  }

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found!');
    }
    const newUser = await this.userRepository.update(id, updateUserDto);
    return newUser;
  }

  async remove(id: string) {
    const user = await this.userRepository.findOne(id);

    if (!user) {
      throw new NotFoundException('User not found!');
    }
    return await this.userRepository.remove(id);
  }

  async sendEmailResetPassword(email: string) {
    const user = await this.userRepository.findByEmail(email);

    if (!user) {
      throw new NotFoundException('User not found!');
    }

    const resetToken = randomUUID();

    await this.userRepository.updateResetToken(email, resetToken);

    const resetPasswordTemplate = this.mailService.resetPassword(
      email,
      user.name,
      resetToken,
    );

    await this.mailService.sendEmail(resetPasswordTemplate);
  }

  async resetPassword(password: string, resetToken: string) {
    const user = await this.userRepository.findByToken(resetToken);

    if (!user) {
      throw new NotFoundException('Reset token not found!');
    }

    await this.userRepository.updatePassword(user.id, password);
  }
}
