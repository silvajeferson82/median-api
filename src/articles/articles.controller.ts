import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  NotFoundException,
} from '@nestjs/common';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { ArticlesService } from './articles.service';
import { CreateArticleDto } from './dto/create-article.dto';
import { UpdateArticleDto } from './dto/update-article.dto';
import { ArticleEntity } from './entities/article.entity';

@Controller('articles')
@ApiTags('articles')
export class ArticlesController {
  constructor(private readonly articlesService: ArticlesService) {}

  @Post()
  @ApiCreatedResponse({ type: ArticleEntity })
  create(@Body() createArticleDto: CreateArticleDto) {
    return this.articlesService.create(createArticleDto);
  }

  @Get('drafts')
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  async findDrafts() {
    return await this.articlesService.findDrafts();
  }

  @Get()
  @ApiOkResponse({ type: ArticleEntity, isArray: true })
  async findAll() {
    return await this.articlesService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: ArticleEntity })
  async findOne(@Param('id') id: string) {
    const article = await this.articlesService.findOne(id);
    if (!article) {
      throw new NotFoundException(`Article with ${id} does not exist.`);
    }
    return article;
  }

  @Patch(':id')
  @ApiOkResponse({ type: ArticleEntity })
  async update(
    @Param('id') id: string,
    @Body() updateArticleDto: UpdateArticleDto,
  ) {
    const article = await this.articlesService.findOne(id);
    if (!article) {
      throw new NotFoundException(`Article with ${id} does not exist.`);
    }

    return await this.articlesService.update(id, updateArticleDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: ArticleEntity })
  async remove(@Param('id') id: string) {
    const article = await this.articlesService.findOne(id);
    if (!article) {
      throw new NotFoundException(`Article with ${id} does not exist.`);
    }

    return this.articlesService.remove(id);
  }
}
