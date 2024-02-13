import { v4 as uuidv4 } from 'uuid';

import { Injectable } from '@nestjs/common';

import { Test, TestSelect } from './model';

import { TestArgs, TestCreateInput } from './dto';

import { PrismaService } from 'src/shared/datasource/prisma.service';

import { FilterService } from 'src/shared/modules/filter.service';

@Injectable()
export class TestService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly filterService: FilterService,
  ) {}

  public async findAll(
    args: TestArgs,
    { select }: TestSelect,
  ): Promise<Test[]> {
    const { search, ...filters } = args || {};

    const tests = await this.prismaService.test.findMany({
      skip: filters.skip,
      cursor: filters.cursor,
      take: filters.take,
      orderBy: filters.orderBy,
      select,
      where: {
        ...args.where,
        AND: this.filterService.getTestSearchFilter(search),
      },
    });
    return tests;
  }

  // public async findOne(
  //   { where }: TestArgs,
  //   { select }: TestSelect,
  // ): Promise<Test> {
  //   return this.prismaService.test.findUnique({
  //     where,
  //     select,
  //   });
  // }

  public async create(
    { questions, ...data }: TestCreateInput,
    { select }: TestSelect,
  ): Promise<Test> {
    console.log('Antes de mapear las preguntas:', questions);

    return this.prismaService.test.create({
      data: {
        ...data,
        questions: {
          create: questions.create.map(({ question: create }) => ({
            question: {
              create,
            },
          })),
        },
      },
      select,
    });
  }
}
