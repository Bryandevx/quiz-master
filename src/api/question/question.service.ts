import { Injectable } from '@nestjs/common';

import { Question, QuestionSelect } from './model';

import { QuestionArgs, QuestionCreateInput } from './dto';

import { PrismaService } from 'src/shared/datasource/prisma.service';

@Injectable()
export class QuestionService {
  constructor(private readonly prismaService: PrismaService) {}

  public async findOne(
    { where }: QuestionArgs,
    { select }: QuestionSelect,
  ): Promise<Question> {
    return this.prismaService.question.findUnique({
      where,
      select,
    });
  }

  public async create(
    data: QuestionCreateInput,
    { select }: QuestionSelect,
  ): Promise<Question> {
    return this.prismaService.question.create({
      data,
      select,
    });
  }
}
