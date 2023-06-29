import { Injectable } from '@nestjs/common';
import { AdsRepository } from '../ads.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateAdDto } from '../../dto/create-ad.dto';
import { UpdateAdDto } from '../../dto/update-ad.dto';
import { Ad, AdFilter } from '../../entities/ad.entity';

@Injectable()
export class AdsPrismaRepository implements AdsRepository {
  constructor(private prisma: PrismaService) {}

  async create(createAdDto: CreateAdDto, userLoggedId: string): Promise<Ad> {
    const newAd = await this.prisma.ad.create({
      data: {
        ...createAdDto,
        userId: userLoggedId,
      },
    });

    return newAd;
  }

  async filter(
    brand: string | undefined,
    model: string | undefined,
    color: string | undefined,
    year: number | undefined,
    fuel: string | undefined,
    minKm: number | undefined,
    maxKm: number | undefined,
    minPrice: number | undefined,
    maxPrice: number | undefined,
  ): Promise<AdFilter> {
    const [total, ads] = await this.prisma.$transaction([
      this.prisma.ad.count(),
      this.prisma.ad.findMany({
        where: {
          brand: {
            contains: brand,
            mode: 'insensitive',
          },
          name: {
            contains: model,
            mode: 'insensitive',
          },
          color: {
            contains: color,
            mode: 'insensitive',
          },
          year: {
            equals: year,
          },
          fuel: {
            contains: fuel,
            mode: 'insensitive',
          },
          km: {
            gte: minKm,
            lte: maxKm,
          },
          price: {
            gte: minPrice,
            lte: maxPrice,
          },
          published: true,
        },
        include: {
          user: true,
        },
      }),
    ]);

    return {
      total,
      count: ads.length,
      page: 'falta implementar',
      perPage: 'falta implementar',
      ads: ads,
    };
  }

  async findAll(): Promise<Ad[]> {
    const ads = await this.prisma.ad.findMany({
      where: {
        published: true,
      },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            password: false,
            createdAt: true,
            isAdmin: true,
            email: true,
            phone: true,
            cpf: true,
            birthDate: true,
            isSeller: true,
            description: true,
            addressId: true,
            reset_token: true,
          },
        },
        Comment: true,
      },
    });
    return ads;
  }

  async findOne(id: string): Promise<Ad> {
    const ad = await this.prisma.ad.findUnique({
      where: { id },
      include: {
        user: {
          select: {
            id: true,
            name: true,
            password: false,
            createdAt: true,
            isAdmin: true,
            email: true,
            phone: true,
            cpf: true,
            birthDate: true,
            isSeller: true,
            description: true,
            addressId: true,
            reset_token: true,
          },
        },
        Comment: true,
      },
    });
    return ad;
  }

  async update(
    id: string,
    updateAdDto: UpdateAdDto,
    userLoggedId: string,
  ): Promise<Ad> {
    const ad = await this.prisma.ad.update({
      where: { id },
      data: updateAdDto,
    });
    return ad;
  }

  async remove(id: string, userLoggedId: string): Promise<Ad> {
    const ad = await this.prisma.ad.delete({
      where: { id },
    });
    return ad;
  }
}
