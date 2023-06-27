import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  comment: string;

  // @IsString()
  // @IsNotEmpty()
  // userId: string;

  // @IsString()
  // @IsNotEmpty()
  // adsId: string;
}
