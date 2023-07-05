import { Injectable } from '@nestjs/common';
import { AdsRepository } from '../ads.repository';
import { PrismaService } from 'src/database/prisma.service';
import { CreateAdDto } from '../../dto/create-ad.dto';
import { UpdateAdDto } from '../../dto/update-ad.dto';
import { Ad, AdFilter } from '../../entities/ad.entity';
import { FilterAdDto } from '../../dto/filter-ad.dto';

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

  async filter(filtersAd: FilterAdDto): Promise<AdFilter> {
    const getData = async (
      perPage: number | undefined,
      page: number | undefined,
    ) => {
      return await this.prisma.ad.findMany({
        where: {
          brand: {
            contains: filtersAd.brand,
            mode: 'insensitive',
          },
          name: {
            contains: filtersAd.model,
            mode: 'insensitive',
          },
          color: {
            contains: filtersAd.color,
            mode: 'insensitive',
          },
          year: {
            equals: filtersAd.year,
          },
          fuel: {
            contains: filtersAd.fuel,
            mode: 'insensitive',
          },
          km: {
            gte: filtersAd.minKm,
            lte: filtersAd.maxKm,
          },
          price: {
            gte: filtersAd.minPrice,
            lte: filtersAd.maxPrice,
          },
          published: true,
        },
        include: {
          user: true,
        },
        take: perPage,
        skip: page && perPage ? (page - 1) * perPage : undefined,
      });
    };

    const { page, perPage } = filtersAd;

    const ads = await getData(perPage, page);
    const adsCount = ads.length;
    const allAds = await getData(undefined, undefined);
    const allAdsCount = allAds.length;
    const hasNextPage = perPage * (page - 1) + adsCount < allAdsCount;
    const hasPreviousPage =
      page > 1 && (await getData(perPage, page - 1)).length > 0;
    const limitPage = Number.isInteger(allAdsCount / perPage)
      ? allAdsCount / perPage
      : parseInt(`${allAdsCount / perPage + 1}`);

    const filters = {
      allBrands: [] as string[],
      allModels: [] as string[],
      allYears: [] as number[],
      allFuels: [] as string[],
      allColors: [] as string[],
    };

    allAds.forEach((ad) => {
      const { allBrands, allModels, allYears, allFuels, allColors } = filters;

      if (!allBrands.includes(ad.brand)) {
        filters.allBrands.push(ad.brand);
      }

      if (!allModels.includes(ad.name)) {
        filters.allModels.push(ad.name);
      }

      if (!allYears.includes(ad.year)) {
        filters.allYears.push(ad.year);
      }

      if (!allFuels.includes(ad.fuel)) {
        filters.allFuels.push(ad.fuel);
      }

      if (!allColors.includes(ad.color)) {
        filters.allColors.push(ad.color);
      }
    });

    return {
      page,
      perPage,
      limitPage,
      hasNextPage,
      hasPreviousPage,
      ads,
      filters,
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
