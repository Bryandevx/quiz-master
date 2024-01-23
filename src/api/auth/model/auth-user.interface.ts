import { Role } from '@prisma/client';
import { User, UserSelect } from 'src/api/user/model';

export interface IAuthUser {
  sub: string;
  email: string;
  role: Role;
}

export interface LoginOutput {
  access_token: string;
  expiresAt: Date;
  user: User;
}

interface LoginOutputPrismaSelect {
  access_token?: boolean;
  expiresAt?: boolean;
  user?: UserSelect;
}

export interface LoginOutputSelect {
  select?: LoginOutputPrismaSelect;
}
// { select: { user: { select: [Object] }, access_token: true } }
