import { Module } from '@nestjs/common';

import { AnswerResolver } from './answer.resolver';

import { AnswerService } from './answer.service';

@Module({
  imports: [],
  providers: [AnswerResolver, AnswerService],
  exports: [AnswerResolver, AnswerService],
})
export class AnswerModule {}
