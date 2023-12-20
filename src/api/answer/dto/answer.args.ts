import { ArgsType, Field } from '@nestjs/graphql';

import { AnswerWhereUniqueInput } from './answer-where-unique.input';

@ArgsType()
export class AnswerArgs {
  @Field(() => AnswerWhereUniqueInput)
  where: {};
}
