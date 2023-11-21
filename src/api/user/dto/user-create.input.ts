import { Field, InputType } from '@nestjs/graphql';
import { Role } from '@prisma/client';

import { IsEmail, MaxLength, MinLength } from 'class-validator';

@InputType()
export class UserCreateInput {
  @Field(() => Role)
  type: Role;

  @IsEmail()
  @Field(() => String)
  email: string;

  @MinLength(10)
  @MaxLength(60)
  @Field(() => String)
  password: string;

  @MaxLength(60)
  @Field(() => String)
  firstName: string;

  @MaxLength(60)
  @Field(() => String)
  lastName: string;

  @MaxLength(60)
  @Field(() => String)
  username: string;
}
