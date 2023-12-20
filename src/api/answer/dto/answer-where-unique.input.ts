import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class AnswerWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;

  @Field(() => String)
  uuid: string;
}
