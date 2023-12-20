import { Field, InputType } from '@nestjs/graphql';

import { MaxLength } from 'class-validator';

import { AnswerWhereUniqueInput } from '.';

@InputType()
export class AnswerCreateInput {
  @MaxLength(60)
  @Field(() => String)
  text: string;
}

@InputType()
export class AnswerCreateNestedOneWithoutCorrectAnswerQuestionsInput {
  @Field(() => AnswerCreateInput)
  create: AnswerCreateInput;
}

@InputType()
export class AnswerCreateNestedOneWithoutOptionAnswerQuestionsInput {
  @Field(() => AnswerCreateInput, { nullable: true })
  create?: AnswerCreateInput;

  @Field(() => AnswerWhereUniqueInput, { nullable: true })
  connect?: AnswerWhereUniqueInput;
}
