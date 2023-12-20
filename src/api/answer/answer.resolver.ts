import { Resolver, Args, Mutation } from '@nestjs/graphql';

import { Answer, AnswerSelect } from './model';

import { AnswerCreateInput } from './dto';

import { AnswerService } from './answer.service';

import {
  GraphQLFields,
  IGraphQLFields,
} from 'src/shared/decorators/graphql-fields';

@Resolver(() => Answer)
export class AnswerResolver {
  constructor(private readonly answerService: AnswerService) {}

  @Mutation(() => Answer)
  public async createAnswer(
    @Args('data') data: AnswerCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<AnswerSelect>,
  ): Promise<Answer> {
    return this.answerService.create(data, fields);
  }
}
