import {
  IsBoolean,
  IsNumber,
  IsOptional,
  IsString,
  IsNotEmpty,
} from 'class-validator';

export class CreateAdDto {
  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  year: number;

  @IsString()
  @IsNotEmpty()
  fuel: string;

  @IsString()
  @IsNotEmpty()
  km: string;

  @IsString()
  @IsNotEmpty()
  color: string;

  @IsNumber()
  @IsNotEmpty()
  priceTf: number;

  @IsNumber()
  @IsNotEmpty()
  price: number;

  @IsString()
  @IsNotEmpty()
  description: string;

  @IsString()
  coverImage: string;

  @IsOptional()
  @IsString()
  firstImage?: string;

  @IsOptional()
  @IsString()
  secondImage?: string;

  @IsOptional()
  @IsString()
  thirdImage?: string;

  @IsOptional()
  @IsString()
  fourthImage?: string;

  @IsOptional()
  @IsString()
  fifthImage?: string;

  @IsOptional()
  @IsString()
  sixthImage?: string;

  @IsBoolean()
  @IsOptional()
  published: boolean;

  @IsString()
  userId: string; //retirar quando tiver autenticação
}
