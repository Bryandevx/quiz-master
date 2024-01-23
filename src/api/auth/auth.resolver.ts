import { UseGuards } from '@nestjs/common';
import { Args, Context, Mutation, Resolver } from '@nestjs/graphql';
import { SignUpInput } from './dto';
import { GqlAuthGuard } from './guards';
import { AuthService } from './auth.service';
import { LoginUserInput, LoginOutput } from './dto';
import { GraphQLFields, IGraphQLFields } from '../../shared/decorators';
import { User, UserSelect } from 'src/api/user/model';
import { LoginOutputSelect } from './model';

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => LoginOutput)
  login(
    @Args('data') data: LoginUserInput,
    @GraphQLFields() { fields }: IGraphQLFields<LoginOutputSelect>,
  ) {
    return this.authService.login(data.email, data.password, fields);
  }

  @Mutation(() => User)
  signup(
    @Args('data') data: SignUpInput,
    @GraphQLFields() { fields }: IGraphQLFields<UserSelect>,
  ) {
    return this.authService.signup(data, fields);
  }
}
