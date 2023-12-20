import { Field, InputType } from '@nestjs/graphql';
import { AnswerCreateNestedOneWithoutOptionAnswerQuestionsInput } from 'src/api/answer/dto';

@InputType()
export class QuestionAnswerWhereUniqueInput {
  @Field(() => String)
  uuid: string;
}

@InputType()
export class QuestionAnswerCreateNestedManyWithoutQuestionInput {
  @Field(() => [QuestionAnswerCreateWithoutQuestionInput], { nullable: true })
  create?: QuestionAnswerCreateWithoutQuestionInput[];

  @Field(() => [QuestionAnswerWhereUniqueInput], { nullable: true })
  connect?: QuestionAnswerWhereUniqueInput[];
}

@InputType()
export class QuestionAnswerCreateWithoutQuestionInput {
  @Field(() => AnswerCreateNestedOneWithoutOptionAnswerQuestionsInput)
  answer: AnswerCreateNestedOneWithoutOptionAnswerQuestionsInput;
}
