import { Injectable } from '@nestjs/common';
import { CommentRepository } from '../comments.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCommentDto } from '../../dto/create-comment.dto';
import { UpdateCommentDto } from '../../dto/update-comment.dto';
import { Comment } from '../../entities/comment.entity';
import { plainToInstance } from 'class-transformer';

@Injectable()
export class CommentsPrismaRepository implements CommentRepository {
  constructor(private prisma: PrismaService) {}

  async create(
    createCommentDto: CreateCommentDto,
    userLoggedId: string,
  ): Promise<Comment> {
    const newComment = new Comment();
    Object.assign(newComment, {
      ...createCommentDto,
    });

    const firstComment = await this.prisma.comment.create({
      data: {
        id: newComment.id,
        userId: userLoggedId,
        comment: newComment.comment,
        createdAt: newComment.createdAt,
        adsId: newComment.adsId,
      },
    });
    return plainToInstance(Comment, firstComment);
  }
  async findOne(id: string): Promise<Comment> {
    const findComment = await this.prisma.comment.findUnique({
      where: { id },
    });

    return plainToInstance(Comment, findComment);
  }
  async update(
    id: string,
    updateCommentDto: UpdateCommentDto,
    userLoggedId: string,
  ): Promise<Comment> {
    const commentUpdate = await this.prisma.comment.update({
      where: { id },
      data: updateCommentDto,
    });

    return plainToInstance(Comment, commentUpdate);
  }
  async remove(id: string, userLoggedId: string): Promise<void> {
    await this.prisma.comment.delete({
      where: { id },
    });
  }
}
