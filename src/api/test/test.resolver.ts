import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';

import { Test, TestSelect } from './model';

import { TestArgs, TestCreateInput } from './dto';

import { TestService } from './test.service';

import {
  GraphQLFields,
  IGraphQLFields,
} from 'src/shared/decorators/graphql-fields';

@Resolver(() => Test)
export class TestResolver {
  constructor(private readonly testService: TestService) {}

  @Query(() => Test, { nullable: true })
  public async test(
    @Args() args: TestArgs,
    @GraphQLFields() { fields }: IGraphQLFields<TestSelect>,
  ): Promise<Test | null> {
    return this.testService.findOne(args, fields);
  }

  @Mutation(() => Test)
  public async createTest(
    @Args('data') data: TestCreateInput,
    @GraphQLFields() { fields }: IGraphQLFields<TestSelect>,
  ): Promise<Test> {
    return this.testService.create(data, fields);
  }
}
