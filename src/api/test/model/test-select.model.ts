interface TestPrismaSelect {
  id?: boolean;
  uuid?: boolean;
  name?: boolean;
  description?: boolean;
  status?: boolean;
  level?: boolean;
  createdAt?: boolean;
  updatedAt?: boolean;
}

export interface TestSelect {
  select?: TestPrismaSelect;
}
