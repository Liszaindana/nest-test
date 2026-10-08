import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { BooksService } from './books.service.js';
import { CreeateBookDto } from './dto/create-book.dto.js';

@Controller('books') //decorator
export class BooksController {

    constructor(private readonly booksService: BooksService) {}

    //show data
    @Get()
    findAll() {
        return this.booksService.findAll();
    }
    //save data
    @Post()
    create(@Body() createBookDto: CreeateBookDto) {
        return this.booksService.create(createBookDto);
    }

    //update data
    @Put(':id')
    update(@Param('id') id: string, @Body() createBookDto: CreeateBookDto) {
        return this.booksService.update(id, createBookDto);
    }

    //delete data
    @Delete(':id')
    remove(@Param('id') id: string, @Body() createBookDto: CreeateBookDto) : string {
        return this.booksService.remove(id) ? `Book with ID ${id} has been removed.` : `Book with ID ${id} not found.`;
    }
}

