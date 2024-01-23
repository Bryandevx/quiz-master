interface UserPrismaSelect {
  id?: boolean;
  uuid?: boolean;
  email?: boolean;
  type?: boolean;
  username?: boolean;
  lastName?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
}

export interface UserSelect {
  select?: UserPrismaSelect;
}
