import { CreateCommentDto } from '../dto/create-comment.dto';
import { UpdateCommentDto } from '../dto/update-comment.dto';
import { Comment } from '../entities/comment.entity';

export abstract class CommentRepository {
  abstract create(
    createCommentDto: CreateCommentDto,
    userLoggedId: string,
  ): Promise<Comment> | Comment;
  abstract findOne(id: string): Promise<Comment> | Comment;
  abstract update(
    id: string,
    updateCommentDto: UpdateCommentDto,
    userLoggedId: string,
  ): Promise<Comment> | Comment;
  abstract remove(id: string, userLoggedId: string): Promise<void> | void;
}
