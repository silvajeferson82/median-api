import { Article } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
import { AuthorEntity } from '../../authors/entities/author.entity';

export class ArticleEntity implements Article {
  @ApiProperty()
  id: string;

  @ApiProperty()
  title: string;

  @ApiProperty({ required: false, nullable: true })
  description: string | null;

  @ApiProperty()
  body: string;

  @ApiProperty()
  published: boolean;

  @ApiProperty({ required: false, nullable: true })
  authorId: string | null;

  @ApiProperty({ required: false, type: AuthorEntity })
  author?: AuthorEntity;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  constructor({ author, ...data }: Partial<ArticleEntity>) {
    Object.assign(this, data);

    if (author) {
      this.author = new AuthorEntity(author);
    }
  }
}
