import { v4 as uuidv4 } from 'uuid';

import { Injectable } from '@nestjs/common';

import { Test, TestSelect } from './model';

import { TestArgs, TestCreateInput } from './dto';

import { PrismaService } from 'src/shared/datasource/prisma.service';

@Injectable()
export class TestService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findOne(
    { where }: TestArgs,
    { select }: TestSelect,
  ): Promise<Test> {
    return this.prismaService.test.findUnique({
      where,
      select,
    });
  }

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
