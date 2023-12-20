import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Question {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  uuid?: string;

  @Field(() => String, { nullable: true })
  text?: string;
}
