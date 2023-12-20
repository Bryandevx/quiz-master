import { Module } from '@nestjs/common';

import { QuestionResolver } from './question.resolver';

import { QuestionService } from './question.service';

@Module({
  imports: [],
  providers: [QuestionResolver, QuestionService],
  exports: [QuestionResolver, QuestionService],
})
export class QuestionModule {}
