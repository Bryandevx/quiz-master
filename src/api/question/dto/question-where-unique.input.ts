import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class QuestionWhereUniqueInput {
  @Field(() => Number, { nullable: true })
  id: number;

  @Field(() => String, { nullable: true })
  text?: string;
}
