import { Injectable } from '@nestjs/common';
import { UserService } from '../user/user.service';
import { compare, compareSync } from 'bcryptjs';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private usersService: UserService,
    private jwtService: JwtService,
  ) {}

  async validateUser(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (user) {
      console.log(user.password);
      const matchPassword = compareSync(password, user.password);
      if (matchPassword) {
        console.log(password, email);
        return { email: user.email };
      }
      return null;
    }
  }

  async login(email: string) {
    const user = await this.usersService.findByEmail(email);

    return {
      token: this.jwtService.sign({ email }, { subject: user.id }),
    };
  }
}
