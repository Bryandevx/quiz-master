import { Field, InputType } from '@nestjs/graphql';

import { Status, Level } from '@prisma/client';

import { MaxLength } from 'class-validator';

import { TestQuestionCreateNestedManyWithoutTestInput } from 'src/api/test-question/dto';

@InputType()
export class TestCreateInput {
  @Field(() => Status)
  status: Status;

  @Field(() => Level)
  level: Level;

  @MaxLength(60)
  @Field(() => String)
  name: string;

  @MaxLength(60)
  @Field(() => String)
  description: string;

  @Field(() => TestQuestionCreateNestedManyWithoutTestInput)
  questions?: TestQuestionCreateNestedManyWithoutTestInput;
}
