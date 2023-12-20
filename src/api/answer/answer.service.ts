import { Injectable } from '@nestjs/common';

import { Answer, AnswerSelect } from './model';

import { AnswerCreateInput } from './dto';

import { PrismaService } from 'src/shared/datasource/prisma.service';

@Injectable()
export class AnswerService {
  constructor(private readonly prismaService: PrismaService) {}
  public async create(
    data: AnswerCreateInput,
    { select }: AnswerSelect,
  ): Promise<Answer> {
    return this.prismaService.answer.create({
      data,
      select,
    });
  }
}
