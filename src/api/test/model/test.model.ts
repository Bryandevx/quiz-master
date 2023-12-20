import { Field, ObjectType, registerEnumType } from '@nestjs/graphql';
import { Role, UserProgram, Status, Level } from '@prisma/client';

@ObjectType()
export class Test {
  @Field(() => Number, { nullable: true })
  id?: number;

  @Field(() => String, { nullable: true })
  uuid?: string;

  @Field(() => String, { nullable: true })
  name?: string;

  @Field(() => Status, { nullable: true })
  status?: Status;

  @Field(() => Level, { nullable: true })
  level?: Level;

  @Field(() => String, { nullable: true })
  description?: string;

  @Field(() => Date, { nullable: true })
  createdAt?: Date;

  @Field(() => Date, { nullable: true })
  updatedAt?: Date;
}

registerEnumType(Status, {
  name: 'Status',
});

registerEnumType(Level, {
  name: 'Level',
});
