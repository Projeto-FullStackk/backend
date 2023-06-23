import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
  Query,
} from '@nestjs/common';
import { AdsService } from './ads.service';
import { CreateAdDto } from './dto/create-ad.dto';
import { UpdateAdDto } from './dto/update-ad.dto';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('ads')
export class AdsController {
  constructor(private readonly adsService: AdsService) {}

  @Post('')
  @UseGuards(JwtAuthGuard)
  create(@Body() createAdDto: CreateAdDto, @Request() req) {
    return this.adsService.create(createAdDto, req.user.id);
  }

  @Get('filter')
  filter(
    @Query('brand') brand: string | undefined,
    @Query('model') model: string | undefined,
    @Query('color') color: string | undefined,
    @Query('year') year: string | undefined,
    @Query('fuel') fuel: string | undefined,
    @Query('minKm') minKm: string | undefined,
    @Query('maxKm') maxKm: string | undefined,
    @Query('minPrice') minPrice: string | undefined,
    @Query('maxPrice') maxPrice: string | undefined,
  ) {
    return this.adsService.filter(
      brand,
      model,
      color,
      year,
      fuel,
      minKm,
      maxKm,
      minPrice,
      maxPrice,
    );
  }

  @Get('')
  findAll() {
    return this.adsService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  findOne(@Param('id') id: string) {
    return this.adsService.findOne(id);
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  update(
    @Param('id') id: string,
    @Body() updateAdDto: UpdateAdDto,
    @Request() req,
  ) {
    return this.adsService.update(id, updateAdDto, req.user.id);
  }

  @Delete(':id')
  @UseGuards(JwtAuthGuard)
  remove(@Param('id') id: string, @Request() req) {
    return this.adsService.remove(id, req.user.id);
  }
}
