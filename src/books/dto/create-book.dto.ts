import {IsNotEmpty, IsInt} from "class-validator";
export class CreateBookDto {
    @IsNotEmpty({message: 'Title is required'})
    readonly title: string;

    @IsNotEmpty({message: 'Author is required'})
    readonly author: string;

    @IsNotEmpty({message: 'ISBN is required'})
    readonly isbn: string;

    @IsNotEmpty({message: 'Publisher year is required'})
    @IsInt({message: 'Publisher year must be a number'})
    readonly publisherYear: number;
}