import { Module } from '@nestjs/common';

import { UserModule } from './modules/user/user.module';
import { AdsModule } from './modules/ads/ads.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [UserModule, AdsModule, AuthModule],
})
export class AppModule {}
