import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) {}

  async create(createAuthorDto: CreateAuthorDto) {
    return await this.prisma.author.create({ data: createAuthorDto });
  }

  async findAll() {
    return await this.prisma.author.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.author.findUnique({ where: { id } });
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto) {
    return await this.prisma.author.update({
      where: { id },
      data: updateAuthorDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.author.delete({ where: { id } });
  }
}
