import { PartialType } from '@nestjs/mapped-types';
import { Transform, Type } from 'class-transformer';
import {
  IsBoolean,
  IsDateString,
  IsEmail,
  IsObject,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator';
import { CreateAddressDto } from './create-user.dto';
import { ApiProperty } from '@nestjs/swagger';
import { hashSync } from 'bcryptjs';

export class UpdateUserDto {
  @IsString()
  @IsOptional()
  @MinLength(3)
  @ApiProperty({
    description: 'Name',
    type: String,
    default: 'João',
    required: false,
  })
  name: string;

  @IsString()
  @IsOptional()
  @IsEmail()
  @ApiProperty({
    description: 'Email',
    type: String,
    default: 'joao@mail.com',
    required: false,
  })
  email: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Cpf',
    type: String,
    default: '000.000.000-00',
    required: false,
  })
  cpf: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Phone',
    type: String,
    default: '+55 (16) 00000-0000',
    required: false,
  })
  phone: string;

  @IsDateString()
  @IsOptional()
  @ApiProperty({
    description: 'Birth date',
    type: String,
    default: '00-00-0000',
    required: false,
  })
  birthDate: string | Date;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'description',
    type: String,
    default: 'Hi my name is João.',
    required: false,
  })
  description: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    description: 'Seller',
    type: Boolean,
    default: false,
    required: false,
  })
  isSeller: boolean;

  @IsString()
  @MinLength(8)
  @IsOptional()
  @Transform(({ value }: { value: string }) => hashSync(value), {
    groups: ['transform'],
  })
  @ApiProperty({
    description: 'password',
    type: String,
    default: '*******',
    required: false,
  })
  password: string;

  @IsObject()
  @ValidateNested()
  @Type(() => CreateAddressDto)
  @IsOptional()
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
    required: false,
  })
  address: CreateAddressDto;
}
export class UpdateAdressDto extends PartialType(CreateAddressDto) {}
