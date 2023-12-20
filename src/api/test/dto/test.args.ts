import { ArgsType, Field } from '@nestjs/graphql';

import { TestWhereUniqueInput } from './test-where-unique.input';

@ArgsType()
export class TestArgs {
  @Field(() => TestWhereUniqueInput)
  where: TestWhereUniqueInput;
}
