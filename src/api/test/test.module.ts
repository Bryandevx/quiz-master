import { Module } from '@nestjs/common';

import { TestResolver } from './test.resolver';

import { TestService } from './test.service';

import { FilterService } from 'src/shared/modules/filter.service';

@Module({
  imports: [],
  providers: [TestResolver, TestService, FilterService],
  exports: [TestResolver, TestService, FilterService],
})
export class TestModule {}
