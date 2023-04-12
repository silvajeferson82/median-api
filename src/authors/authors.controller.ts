import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { AuthorEntity } from './entities/author.entity';

@Controller('authors')
@ApiTags('authors')
export class AuthorsController {
  constructor(private readonly authorsService: AuthorsService) {}

  @Post()
  @ApiCreatedResponse({ type: AuthorEntity })
  async create(@Body() createAuthorDto: CreateAuthorDto) {
    return new AuthorEntity(await this.authorsService.create(createAuthorDto));
  }

  @Get()
  @ApiOkResponse({ type: AuthorEntity, isArray: true })
  async findAll() {
    const authors = await this.authorsService.findAll();
    return authors.map((author) => new AuthorEntity(author));
  }

  @Get(':id')
  @ApiOkResponse({ type: AuthorEntity })
  async findOne(@Param('id') id: string) {
    return new AuthorEntity(await this.authorsService.findOne(id));
  }

  @Patch(':id')
  @ApiCreatedResponse({ type: AuthorEntity })
  async update(
    @Param('id') id: string,
    @Body() updateAuthorDto: UpdateAuthorDto,
  ) {
    return new AuthorEntity(
      await this.authorsService.update(id, updateAuthorDto),
    );
  }

  @Delete(':id')
  @ApiOkResponse({ type: AuthorEntity })
  async remove(@Param('id') id: string) {
    return new AuthorEntity(await this.authorsService.remove(id));
  }
}
