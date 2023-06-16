import {
  IsBoolean,
  IsDateString,
  IsNotEmpty,
  IsObject,
  IsOptional,
  IsString,
  ValidateNested,
} from 'class-validator';
import { IAddress } from '../entities/user.entity';

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

  @IsOptional()
  @IsString()
  complement?: string;
}

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  phone: string;

  @IsDateString()
  birthDate: string;

  @IsString()
  description: string;

  @IsBoolean()
  @IsOptional()
  isSeller: boolean;

  @IsString()
  password: string;

  @IsObject()
  @ValidateNested()
  address: IAddress;
}
