import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class CreateUserDto {
    @IsNotEmpty({ message: 'Name is required' })
    readonly name: string;

    @IsEmail({}, { message: 'Invalid email format' })
    @IsNotEmpty({ message: 'Email is required' })
    readonly email: string;

    @IsNotEmpty({ message: 'Password is required' })
    @MinLength(6, { message: 'Password must be at least 6 characters' })
    readonly password: string;

    @IsNotEmpty({ message: 'Confirm password is required' })
    readonly confirmPassword: string;
}