import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
// import { AdsPrismaRepository } from './repositories/prisma/ads.prisma.repository';
import { AdsRepository } from './repositories/ads.repository';

@Injectable()
export class AdsService {
  constructor(private adsRepository: AdsRepository) {}

  async create(createAdDto: CreateAdDto) {
    const ads = await this.adsRepository.create(createAdDto);
    return ads;
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

  async update(id: string, updateAdDto: UpdateAdDto) {
    const ad = await this.adsRepository.update(id, updateAdDto);

    return ad;
  }

  async remove(id: string) {
    await this.adsRepository.remove(id);

    return;
  }
}
