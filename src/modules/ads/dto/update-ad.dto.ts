import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNumber, IsOptional, IsBoolean } from 'class-validator';

export class UpdateAdDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Brand name',
    type: String,
    default: 'Fiat',
    required: false,
  })
  brand: string;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Car name',
    type: String,
    default: 'Mobi',
    required: false,
  })
  name: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'Year',
    type: Number,
    default: '2022',
    required: false,
  })
  year: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Fuel',
    type: String,
    default: 'Gasoline',
    required: false,
  })
  fuel: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'Mileage',
    type: Number,
    default: '5000',
    required: false,
  })
  km: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Color',
    type: String,
    default: 'Black',
    required: false,
  })
  color: string;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'Price FIPE table',
    type: Number,
    default: '55000',
    required: false,
  })
  priceTf: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({
    description: 'Price',
    type: Number,
    default: '45000',
    required: false,
  })
  price: number;

  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Description about car',
    type: String,
    default: 'That is a excelent car.',
    required: false,
  })
  description: string;

  @IsString()
  @ApiProperty({
    description: 'Cover Image',
    type: String,
    default: 'path/coverImage...',
    required: false,
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
