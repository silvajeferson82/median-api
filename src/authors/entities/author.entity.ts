import { ApiProperty } from '@nestjs/swagger';
import { Author } from '@prisma/client';

export class AuthorEntity implements Author { 

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

  password: string;

}
