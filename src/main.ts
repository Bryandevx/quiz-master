import { NestFactory } from '@nestjs/core';
import { Logger, ValidationPipe } from '@nestjs/common';

import { json } from 'express';

import { AppModule } from './app.module';

import { ConfigService } from 'src/shared/config/config.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get<ConfigService>(ConfigService);

  const PORT = config.get('PORT') as number;

  app.enableCors();

  app.useGlobalPipes(new ValidationPipe());
  app.use(json({ limit: '50mb' }));

  await app.listen(PORT);

  Logger.log(`App Running in port ${PORT}`, 'App Initialization');
}

bootstrap();
