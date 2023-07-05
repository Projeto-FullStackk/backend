import { CreateAdDto } from '../dto/create-ad.dto';
import { FilterAdDto } from '../dto/filter-ad.dto';
import { UpdateAdDto } from '../dto/update-ad.dto';
import { Ad, AdFilter } from '../entities/ad.entity';

export abstract class AdsRepository {
  abstract create(
    createAdDto: CreateAdDto,
    userLoggedId: string,
  ): Promise<Ad> | Ad;
  abstract filter(filtersAd: FilterAdDto): Promise<AdFilter> | AdFilter;
  abstract findAll(): Promise<Ad[] | Ad> | Ad[];
  abstract findOne(id: string): Promise<Ad> | Ad;
  abstract update(
    id: string,
    updateAdDto: UpdateAdDto,
    userLoggedId: string,
  ): Promise<Ad> | Ad;
  abstract remove(id: string, userLoggedId: string): Promise<Ad> | Ad;
}
