import { ArgsType, Field, Int } from '@nestjs/graphql';

import { TestWhereInput } from './test-where.input';
import { TestWhereUniqueInput } from './test-where-unique.input';
import { TestOrderByInput } from './test-order-by.input';
import { IsOptional, Max, Min } from 'class-validator';

import { SearchInput } from 'src/shared/util';

@ArgsType()
export class TestArgs {
  @IsOptional()
  @Field(() => Int, { nullable: true })
  @Min(0)
  skip?: number;

  @IsOptional()
  @Field(() => Int, { nullable: true })
  @Min(1)
  @Max(50)
  take?: number;

  @Field(() => TestWhereUniqueInput, { nullable: true })
  cursor?: TestWhereUniqueInput;

  @Field(() => TestOrderByInput, { nullable: true })
  orderBy?: TestOrderByInput;

  @Field(() => TestWhereInput, { nullable: true })
  where?: TestWhereInput;

  @IsOptional()
  @Field(() => SearchInput, { nullable: true })
  search?: SearchInput;
}
