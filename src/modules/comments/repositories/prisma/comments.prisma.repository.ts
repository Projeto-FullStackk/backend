import { Injectable } from '@nestjs/common';
import { CommentRepository } from '../comments.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateCommentDto } from '../../dto/create-comment.dto';
import { UpdateCommentDto } from '../../dto/update-comment.dto';
import { Comment } from '../../entities/comment.entity';

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
    return firstComment;
  }
  async findAll(): Promise<Comment | Comment[]> {
    throw new Error('Method not implemented.');
  }
  async findOne(id: string): Promise<Comment> {
    throw new Error('Method not implemented.');
  }
  async update(
    id: string,
    updateCommentDto: UpdateCommentDto,
    userLoggedId: string,
  ): Promise<Comment> {
    throw new Error('Method not implemented.');
  }
  async remove(id: string, userLoggedId: string): Promise<void> {
    throw new Error('Method not implemented.');
  }
}
