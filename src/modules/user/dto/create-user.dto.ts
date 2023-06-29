import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { hashSync } from 'bcryptjs';
import { Transform, Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateAddressDto {
  @IsString()
  @IsNotEmpty()
  zipCode: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  city: string;

  @IsString()
  @IsNotEmpty()
  street: string;

  @IsString()
  @IsNotEmpty()
  number: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsOptional()
  @IsString()
  complement?: string;
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @ApiProperty({
    description: 'Name',
    type: String,
    default: 'João',
  })
  name: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  @ApiProperty({
    description: 'Email',
    type: String,
    default: 'joao@mail.com',
  })
  email: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Cpf',
    type: String,
    default: '000.000.000-00',
  })
  cpf: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Phone',
    type: String,
    default: '+55 (16) 00000-0000',
  })
  phone: string;

  @IsDateString()
  @ApiProperty({
    description: 'Birth date',
    type: String,
    default: '00-00-0000',
  })
  birthDate: string | Date;

  @IsString()
  @ApiProperty({
    description: 'description',
    type: String,
    default: 'Hi my name is João.',
  })
  description: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    description: 'Seller',
    type: Boolean,
    default: false,
  })
  isSeller: boolean;

  @IsString()
  @IsNotEmpty()
  @MinLength(8)
  @Transform(({ value }: { value: string }) => hashSync(value), {
    groups: ['transform'],
  })
  @ApiProperty({
    description: 'password',
    type: String,
    default: '*******',
  })
  password: string;

  @IsObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  @ApiProperty({
    description: 'address',
    type: String,
    default: {
      zipCode: '12345-678',
      state: 'SP',
      city: 'São Paulo',
      country: 'Brazil',
      street: 'Rua das Flores',
      number: '123',
      complement: 'Apt. 456',
    },
  })
  address: CreateAddressDto;
}
