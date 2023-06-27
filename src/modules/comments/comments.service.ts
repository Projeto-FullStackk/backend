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
    const comment = await this.CommentsRepository.findOne(id);
    return comment;
  }

  async update(
    id: string,
    updateCommentDto: UpdateCommentDto,
    userLoggedId: string,
  ) {
    const comment = await this.CommentsRepository.update(
      id,
      updateCommentDto,
      userLoggedId,
    );
    return comment;
  }

  async remove(id: string, userLoggedId: string) {
    return await this.CommentsRepository.remove(id, userLoggedId);
  }
}
