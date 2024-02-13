import { InputType, Field } from '@nestjs/graphql';
import { IsOptional } from 'class-validator';

import { OrderByArg } from 'src/shared/util';

@InputType()
export class TestOrderByInput {
  @IsOptional()
  @Field(() => OrderByArg, { nullable: true })
  id?: OrderByArg;

  @IsOptional()
  @Field(() => OrderByArg, { nullable: true })
  uuid?: OrderByArg;

  @IsOptional()
  @Field(() => OrderByArg, { nullable: true })
  name?: OrderByArg;

  @IsOptional()
  @Field(() => OrderByArg, { nullable: true })
  description?: OrderByArg;

  @IsOptional()
  @Field(() => OrderByArg, { nullable: true })
  createdAt?: OrderByArg;

  @IsOptional()
  @Field(() => OrderByArg, { nullable: true })
  updatedAt?: OrderByArg;
}
