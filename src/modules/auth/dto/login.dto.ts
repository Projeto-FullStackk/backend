import { ApiProperty } from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';

export class LoginDTO {
  @IsEmail()
  @ApiProperty({
    description: 'Email',
    type: String,
    default: 'joao@mail.com',
  })
  email: string;

  @IsString()
  @ApiProperty({
    description: 'Password',
    type: String,
    default: '*******',
  })
  password: string;
}
