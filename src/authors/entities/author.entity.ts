import { ApiProperty } from '@nestjs/swagger';
import { Author } from '@prisma/client';
import { Exclude } from 'class-transformer';

export class AuthorEntity implements Author { 
  constructor(partial: Partial<AuthorEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;

  @ApiProperty()
  name: string;

  @ApiProperty()
  email: string;

  @Exclude()
  password: string;
}
