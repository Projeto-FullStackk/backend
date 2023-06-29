import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString } from 'class-validator';

export class UpdateCommentDto {
  @IsString()
  @IsOptional()
  @ApiProperty({
    description: 'Comment',
    type: String,
    default: 'Beautiful car.',
    required: false,
  })
  comment: string;
}
