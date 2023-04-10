import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';

@Injectable()
export class ArticlesService {
  constructor(private prisma: PrismaService) {}

  async create(createArticleDto: CreateArticleDto) {
    return await this.prisma.article.create({ data: createArticleDto });
  }

  async findAll() {
    return await this.prisma.article.findMany({
      where: {
        published: true,
      },
    });
  }

  async findDrafts() {
    return await this.prisma.article.findMany({
      where: {
        published: false,
      },
    });
  }

  async findOne(id: string) {
    return await this.prisma.article.findUnique({ where: { id } });
  }

  async update(id: string, updateArticleDto: UpdateArticleDto) {
    return await this.prisma.article.update({
      where: { id },
      data: updateArticleDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.article.delete({ where: { id } });
  }
}
