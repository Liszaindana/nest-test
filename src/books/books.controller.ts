import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';

@Controller('books') //decorator
export class BooksController {
    //show data
    @Get()
    findAll() : string {
        return 'This action returns all books';
    }
    //save data
    @Post()
    create() : string {
        return 'This action adds a new book';
    }

    //update data
    @Put(':id')
    update(@Param('id') id: string) : string {
        return `This action updates book with ID: ${id}`;
    }

    //delete data
    @Delete(':id')
    remove(@Param('id') id: string) : string {
        return `This action removes book with ID: ${id}`;
    }
}

