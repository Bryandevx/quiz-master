import { Module } from '@nestjs/common';

import { TestResolver } from './test.resolver';

import { TestService } from './test.service';

@Module({
  imports: [],
  providers: [TestResolver, TestService],
  exports: [TestResolver, TestService],
})
export class TestModule {}
