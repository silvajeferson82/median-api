import { Injectable } from '@nestjs/common';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { PrismaService } from '../prisma/prisma.service';
import * as bcrypt from 'bcrypt';

export const roundsOfHashing = 10; 

@Injectable()
export class AuthorsService {
  constructor(private prisma: PrismaService) { }

  async create(createAuthorDto: CreateAuthorDto) {
    const hashedPassword = await bcrypt.hash(
      createAuthorDto.password,
      roundsOfHashing,
    );

    createAuthorDto.password = hashedPassword;

    return await this.prisma.author.create({ data: createAuthorDto });
  }

  async findAll() {
    return await this.prisma.author.findMany();
  }

  async findOne(id: string) {
    return await this.prisma.author.findUnique({ where: { id } });
  }

  async update(id: string, updateAuthorDto: UpdateAuthorDto) {
    if (updateAuthorDto.password) {
      updateAuthorDto.password = await bcrypt.hash(
        updateAuthorDto.password,
        roundsOfHashing,
      );
    }
    return await this.prisma.author.update({
      where: { id },
      data: updateAuthorDto,
    });
  }

  async remove(id: string) {
    return await this.prisma.author.delete({ where: { id } });
  }
}
