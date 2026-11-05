import { Module } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { BooksController } from './books.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Book } from './entities/book.entity.js';

@Module({
  controllers: [BooksController],
  imports: [TypeOrmModule.forFeature([Book])],
  providers: [BooksService],
})
export class BooksModule {}
