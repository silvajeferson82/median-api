import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { AuthorsService } from './authors.service';
import { CreateAuthorDto } from './dto/create-author.dto';
import { UpdateAuthorDto } from './dto/update-author.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags, ApiBearerAuth } from '@nestjs/swagger';
import { AuthorEntity } from './entities/author.entity';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

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
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: AuthorEntity, isArray: true })
  async findAll() {
    const authors = await this.authorsService.findAll();
    return authors.map((author) => new AuthorEntity(author));
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: AuthorEntity })
  async findOne(@Param('id') id: string) {
    return new AuthorEntity(await this.authorsService.findOne(id));
  }

  @Patch(':id')
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
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
  @UseGuards(JwtAuthGuard)
  @ApiBearerAuth()
  @ApiOkResponse({ type: AuthorEntity })
  async remove(@Param('id') id: string) {
    return new AuthorEntity(await this.authorsService.remove(id));
  }
}
