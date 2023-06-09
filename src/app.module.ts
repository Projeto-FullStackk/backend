import { Module } from '@nestjs/common';

import { UserModule } from './modules/user/user.module';
import { AdsModule } from './modules/ads/ads.module';

@Module({
  imports: [UserModule, AdsModule],
})
export class AppModule {}
