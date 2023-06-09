import { Injectable } from '@nestjs/common';
import { AdsRepository } from '../ads.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateAdDto } from '../../dto/create-ad.dto';
import { UpdateAdDto } from '../../dto/update-ad.dto';
import { Ad } from '../../entities/ad.entity';

@Injectable()
export class AdsPrismaRepository implements AdsRepository {
  constructor(private prisma: PrismaService) {}

  async create(createAdDto: CreateAdDto): Promise<Ad> {
    const ad = await this.prisma.ad.create({
      data: createAdDto,
    });
    return ad;
  }

  async findAll(): Promise<Ad[]> {
    const ads = await this.prisma.ad.findMany();
    return ads;
  }

  async findOne(id: string): Promise<Ad> {
    const ad = await this.prisma.ad.findUnique({
      where: { id },
    });
    return ad;
  }

  async update(id: string, updateAdDto: UpdateAdDto): Promise<Ad> {
    const ad = await this.prisma.ad.update({
      where: { id },
      data: updateAdDto,
    });
    return ad;
  }

  async remove(id: string): Promise<Ad> {
    const ad = await this.prisma.ad.delete({
      where: { id },
    });
    return ad;
  }
}