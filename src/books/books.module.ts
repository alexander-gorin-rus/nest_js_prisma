import { Module } from '@nestjs/common';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [],
  controllers: [BooksController],
  providers: [BooksService, PrismaService],
})
export class BooksModule {}
