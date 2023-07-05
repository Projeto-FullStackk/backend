import {
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
// import { AdsPrismaRepository } from './repositories/prisma/ads.prisma.repository';
import { AdsRepository } from './repositories/ads.repository';
import { Ad, AdFilter } from './entities/ad.entity';

@Injectable()
export class AdsService {
  constructor(private adsRepository: AdsRepository) {}

  async create(createAdDto: CreateAdDto, userLoggedId: string): Promise<Ad> {
    const ads = await this.adsRepository.create(createAdDto, userLoggedId);
    return ads;
  }

  async filter(
    brand: string | undefined,
    model: string | undefined,
    color: string | undefined,
    year: string | undefined,
    fuel: string | undefined,
    minKm: string | undefined,
    maxKm: string | undefined,
    minPrice: string | undefined,
    maxPrice: string | undefined,
    page: string | undefined,
    perPage: string | undefined,
  ): Promise<AdFilter> {
    return await this.adsRepository.filter({
      brand: brand !== 'all' ? brand : undefined,
      model: model !== 'all' ? model : undefined,
      color: color !== 'all' ? color : undefined,
      year: year !== 'all' && !isNaN(+year) ? +year : undefined,
      fuel: fuel !== 'all' ? fuel : undefined,
      minKm: minKm !== 'all' && !isNaN(+minKm) ? +minKm : undefined,
      maxKm: maxKm !== 'all' && !isNaN(+maxKm) ? +maxKm : undefined,
      minPrice: minPrice !== 'all' && !isNaN(+minPrice) ? +minPrice : undefined,
      maxPrice: maxPrice !== 'all' && !isNaN(+maxPrice) ? +maxPrice : undefined,
      page: !isNaN(+page) && +page > 0 ? +page : 1,
      perPage:
        !isNaN(+perPage) && +perPage > 0 && +perPage < 12 ? +perPage : 12,
    });
  }

  async findAll() {
    return this.adsRepository.findAll();
  }

  async findOne(id: string) {
    const findAd = await this.adsRepository.findOne(id);

    if (!findAd) {
      throw new NotFoundException('Ad not found');
    }

    return findAd;
  }

  async update(id: string, updateAdDto: UpdateAdDto, userLoggedId: string) {
    const ad = await this.adsRepository.update(id, updateAdDto, userLoggedId);

    return ad;
  }

  async remove(id: string, userLoggedId: string) {
    const findAd = await this.adsRepository.findOne(id);

    if (findAd.userId !== userLoggedId) {
      throw new UnauthorizedException('User not authorized');
    }
    await this.adsRepository.remove(id, userLoggedId);

    return;
  }
}
