import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
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

  async findOne(id: string) {
    const comment = await this.CommentsRepository.findOne(id);

    if (!comment) {
      throw new NotFoundException('Comment not found!');
    }
    return comment;
  }

  async update(
    id: string,
    updateCommentDto: UpdateCommentDto,
    userLoggedId: string,
  ) {
    const findComment = await this.CommentsRepository.findOne(id);

    if (!findComment) {
      throw new NotFoundException('Comment not found!');
    }

    if (findComment.userId !== userLoggedId) {
      throw new UnauthorizedException(
        'You can only edit/delete your own comment',
      );
    }

    const comment = await this.CommentsRepository.update(
      id,
      updateCommentDto,
      userLoggedId,
    );
    return comment;
  }

  async remove(id: string, userLoggedId: string) {
    const comment = await this.CommentsRepository.findOne(id);

    if (!comment) {
      throw new NotFoundException('Comment not found!');
    }

    if (comment.userId !== userLoggedId) {
      throw new UnauthorizedException(
        'You can only edit/delete your own comment',
      );
    }
    return await this.CommentsRepository.remove(id, userLoggedId);
  }
}
