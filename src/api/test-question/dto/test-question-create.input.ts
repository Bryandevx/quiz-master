import { Field, InputType } from '@nestjs/graphql';
import { QuestionCreateWithoutTestsInput } from 'src/api/question/dto';

@InputType()
export class TestQuestionCreateNestedManyWithoutTestInput {
  @Field(() => [TestQuestionCreateWithoutTestInput])
  create: TestQuestionCreateWithoutTestInput[];
}

@InputType()
export class TestQuestionCreateWithoutTestInput {
  @Field(() => QuestionCreateWithoutTestsInput)
  question: QuestionCreateWithoutTestsInput;
}
