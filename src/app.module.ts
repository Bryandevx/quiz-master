import { Module } from '@nestjs/common';

import { ConfigModule } from 'src/shared/config/config.module';
import { UserModule } from './api/user/user.module';
import { PrismaModule } from './shared/datasource/prisma.module';

@Module({
  imports: [PrismaModule, ConfigModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
