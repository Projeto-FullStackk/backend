import { CreateAdDto } from '../dto/create-ad.dto';
import { UpdateAdDto } from '../dto/update-ad.dto';
import { Ad } from '../entities/ad.entity';

export abstract class AdsRepository {
  abstract create(createAdDto: CreateAdDto): Promise<Ad> | Ad;
  abstract findAll(): Promise<Ad[] | Ad> | Ad[];
  abstract findOne(id: string): Promise<Ad> | Ad;
  abstract update(id: string, updateAdDto: UpdateAdDto): Promise<Ad> | Ad;
  abstract remove(id: string): Promise<Ad> | Ad;
}
