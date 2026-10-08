import { Injectable } from '@nestjs/common';
import { Book } from './entities/book-entity.js';

@Injectable()
export class BooksService {
    private books: Book[] = [
        {
            id: '1',
            title: 'The Great Gatsby',
            author: 'F. Scott Fitzgerald',
            isbn: '9780743273565',
            publisherYear: 1925,
            isAvailable: true
        },
        {
            id: '2',
            title: 'To Kill a Mockingbird',
            author: 'Harper Lee',
            isbn: '978-0-06-112008-4',
            publisherYear: 1960,
            isAvailable: false
        }
    ];

    // Method to retrieve all books
    findAll(): Book[] {
        return this.books;
    }

    // Method to create a new book
    create(createBookDto: any): Book {
        const newBook: Book = {
            id: (this.books.length + 1).toString(),
            title: createBookDto.title,
            author: createBookDto.author,
            isbn: createBookDto.isbn,
            publisherYear: createBookDto.publisherYear,
            isAvailable: true
        };

        // Add the new book to the array
        this.books.push(newBook);
        return newBook;
    }

    // Method to update an existing book
    update(id: string, createBookDto: any): Book | undefined {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            const updatedBook = { ...this.books[bookIndex], ...createBookDto };
            this.books[bookIndex] = updatedBook;
            return updatedBook;
        }
        return undefined; // Return undefined if the book is not found
    }

    // Method to remove a book
    remove(id: string): boolean {
        const bookIndex = this.books.findIndex(book => book.id === id);
        if (bookIndex !== -1) {
            this.books.splice(bookIndex, 1);
            return true; // Return true if the book was successfully removed
        }
        return false; // Return false if the book was not found
    }
}
