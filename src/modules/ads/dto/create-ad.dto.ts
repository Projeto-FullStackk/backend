import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty({
    description: 'Brand name',
    type: String,
    default: 'Fiat',
  })
  brand: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Car name',
    type: String,
    default: 'Mobi',
  })
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Year',
    type: Number,
    default: '2022',
  })
  year: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Fuel',
    type: String,
    default: 'Gasoline',
  })
  fuel: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Mileage',
    type: Number,
    default: '5000',
  })
  km: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Color',
    type: String,
    default: 'Black',
  })
  color: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Price FIPE table',
    type: Number,
    default: '55000',
  })
  priceTf: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Price',
    type: Number,
    default: '45000',
  })
  price: number;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Description about car',
    type: String,
    default: 'That is a excelent car.',
  })
  description: string;

  @IsString()
  @ApiProperty({
    description: 'Cover Image',
    type: String,
    default: 'path/coverImage...',
  })
  coverImage: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Image',
    type: String,
    default: 'path/image...',
    required: false,
  })
  firstImage?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Image',
    type: String,
    default: 'path/image...',
    required: false,
  })
  secondImage?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Image',
    type: String,
    default: 'path/image...',
    required: false,
  })
  thirdImage?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Image',
    type: String,
    default: 'path/image...',
    required: false,
  })
  fourthImage?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Image',
    type: String,
    default: 'path/image...',
    required: false,
  })
  fifthImage?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({
    description: 'Image',
    type: String,
    default: 'path/image...',
    required: false,
  })
  sixthImage?: string;

  @IsBoolean()
  @IsOptional()
  @ApiProperty({
    description: 'Published',
    type: Boolean,
    default: true,
    required: false,
  })
  published: boolean;
}
