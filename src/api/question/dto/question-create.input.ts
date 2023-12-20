import { Field, InputType } from '@nestjs/graphql';

import { MaxLength } from 'class-validator';

import { AnswerCreateNestedOneWithoutCorrectAnswerQuestionsInput } from 'src/api/answer/dto';

import { QuestionAnswerCreateNestedManyWithoutQuestionInput } from 'src/api/question-answer/dto';

@InputType()
export class QuestionCreateInput {
  @MaxLength(60)
  @Field(() => String)
  text: string;

  @Field(() => AnswerCreateNestedOneWithoutCorrectAnswerQuestionsInput)
  correctAnswer: AnswerCreateNestedOneWithoutCorrectAnswerQuestionsInput;
}

@InputType()
export class QuestionCreateWithoutTestsInput {
  @Field(() => String)
  text: string;

  @Field(() => AnswerCreateNestedOneWithoutCorrectAnswerQuestionsInput)
  correctAnswer: AnswerCreateNestedOneWithoutCorrectAnswerQuestionsInput;

  @Field(() => QuestionAnswerCreateNestedManyWithoutQuestionInput)
  answers: QuestionAnswerCreateNestedManyWithoutQuestionInput;
}
