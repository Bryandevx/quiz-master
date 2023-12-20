import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { Question, QuestionSelect } from './model';

import { QuestionArgs, QuestionCreateInput } from './dto';

import { QuestionService } from './question.service';

import {
  GraphQLFields,
  IGraphQLFields,
} from 'src/shared/decorators/graphql-fields';

@Resolver(() => Question)
export class QuestionResolver {
  constructor(private readonly questionService: QuestionService) {}

  @Query(() => Question, { nullable: true })
  public async question(
    @Args() args: QuestionArgs,
    @GraphQLFields() { fields }: IGraphQLFields<QuestionSelect>,
  ): Promise<Question | null> {
    return this.questionService.findOne(args, fields);
  }

  @Mutation(() => Question)
  public async createQuestion(
    @Args('data') data: QuestionCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<QuestionSelect>,
  ): Promise<Question> {
    return this.questionService.create(data, fields);
  }
}
