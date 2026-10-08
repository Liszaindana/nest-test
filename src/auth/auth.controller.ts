import {
    Body,
    Controller,
    Param,
    Post,
    Put
} from '@nestjs/common';

import { AuthService } from './auth.service.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { ForgotPasswordDto } from './dto/forgot-password.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { ResetPasswordDto } from './dto/reset-password.dto.js';

@Controller('auth')
export class AuthController {

    constructor(
        private readonly authService: AuthService
    ) {}


    // REGISTER
    @Post('register')
    register(
        @Body() createUserDto: CreateUserDto
    ) {
        return this.authService.register(createUserDto);
    }


    // LOGIN
    @Post('login')
    login(
        @Body() loginDto: LoginDto
    ) {
        return this.authService.login(loginDto);
    }


    // FORGOT PASSWORD
    @Post('forgot-password')
    forgotPassword(
        @Body() forgotPasswordDto: ForgotPasswordDto
    ) {
        return this.authService.forgotPassword(
            forgotPasswordDto
        );
    }


    // RESET PASSWORD
    @Put('reset-password/:token')
    resetPassword(
        @Param('token') token: string,
        @Body() resetPasswordDto: ResetPasswordDto
    ) {
        return this.authService.resetPassword(
            token,
            resetPasswordDto
        );
    }
}