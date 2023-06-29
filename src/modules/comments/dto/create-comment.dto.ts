import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'Comment',
    type: String,
    default: 'Beautiful car.',
  })
  comment: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    description: 'AdsId',
    type: String,
    default: 'AdsId',
  })
  adsId: string;
}
