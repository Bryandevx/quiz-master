import { Module } from '@nestjs/common';

import { ConfigModule } from 'src/shared/config/config.module';

import { UserModule } from './api/user/user.module';

import { TestModule } from './api/test/test.module';

import { QuestionModule } from './api/question/question.module';

import { AnswerModule } from './api/answer/answer.module';

import { PrismaModule } from './shared/datasource/prisma.module';

import { AuthModule } from './api/auth/auth.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    ConfigModule,
    UserModule,
    TestModule,
    QuestionModule,
    AnswerModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
