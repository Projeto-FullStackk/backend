import { Injectable } from '@nestjs/common';
import { CreateCommentDto } from './dto/create-comment.dto';
import { UpdateCommentDto } from './dto/update-comment.dto';
import { CommentRepository } from './repositories/comments.repository';

@Injectable()
export class CommentsService {
  constructor(private CommentsRepository: CommentRepository) {}

  async create(createCommentDto: CreateCommentDto, userLoggedId: string) {
    const comment = await this.CommentsRepository.create(
      createCommentDto,
      userLoggedId,
    );
    return comment;
  }

  async findAll() {
    return `This action returns all comments`;
  }

  async findOne(id: string) {
    return `This action returns a #${id} comment`;
  }

  async update(id: string, updateCommentDto: UpdateCommentDto) {
    return `This action updates a #${id} comment`;
  }

  async remove(id: string) {
    return `This action removes a #${id} comment`;
  }
}
