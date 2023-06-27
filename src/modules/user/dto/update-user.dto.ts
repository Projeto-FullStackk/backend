import { PartialType } from '@nestjs/mapped-types';
import { Type } from 'class-transformer';
import { IsObject, ValidateNested } from 'class-validator';
import { CreateAddressDto, CreateUserDto } from './create-user.dto';

export class UpdateUserDto extends PartialType(CreateUserDto) {
  @IsObject()
  @ValidateNested()
  @Type(() => PartialType(CreateAddressDto))
  address: CreateAddressDto;
}
export class UpdateAdressDto extends PartialType(CreateAddressDto) {}
