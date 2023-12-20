import { ArgsType, Field } from '@nestjs/graphql';

import { QuestionWhereUniqueInput } from './question-where-unique.input';

@ArgsType()
export class QuestionArgs {
  @Field(() => QuestionWhereUniqueInput)
  where: QuestionWhereUniqueInput;
}
