import { Injectable } from '@nestjs/common';
import { User } from './entities/user-entity.js';
import { CreateUserDto } from './dto/create-user.dto.js';
import { LoginDto } from './dto/login.dto.js';
import { ForgotPasswordDto } from './dto/forgot-password.dto.js';
import { ResetPasswordDto } from './dto/reset-password.dto.js';

@Injectable()
export class AuthService {

    private users: User[] = [
        {
            id: '1',
            name: 'Admin',
            email: 'admin@gmail.com',
            password: '123456'
        }
    ];


    // =========================
    // REGISTER
    // =========================

    register(createUserDto: CreateUserDto): User | string {

        if (
            createUserDto.password !==
            createUserDto.confirmPassword
        ) {
            return 'Password dan confirm password tidak sama.';
        }

        const existingUser = this.users.find(
            user => user.email === createUserDto.email
        );

        if (existingUser) {
            return 'Email sudah terdaftar.';
        }

        const newUser: User = {
            id: (this.users.length + 1).toString(),
            name: createUserDto.name,
            email: createUserDto.email,
            password: createUserDto.password
        };

        this.users.push(newUser);

        return newUser;
    }


    // =========================
    // LOGIN
    // =========================

    login(loginDto: LoginDto): User | string {

        const user = this.users.find(
            user => user.email === loginDto.email
        );

        if (!user) {
            return 'Email atau password salah.';
        }

        if (user.password !== loginDto.password) {
            return 'Email atau password salah.';
        }

        return user;
    }


    // =========================
    // FORGOT PASSWORD
    // =========================

    forgotPassword(
        forgotPasswordDto: ForgotPasswordDto
    ): string {

        const user = this.users.find(
            user => user.email === forgotPasswordDto.email
        );

        if (!user) {
            return 'Email tidak ditemukan.';
        }

        // membuat token sederhana
        const token =
            Math.random().toString(36).substring(2, 15);

        // simpan token ke user
        user.resetToken = token;

        return `Reset password token: ${token}`;
    }


    // =========================
    // RESET PASSWORD
    // =========================

    resetPassword(
        token: string,
        resetPasswordDto: ResetPasswordDto
    ): string {

        const user = this.users.find(
            user => user.resetToken === token
        );

        if (!user) {
            return 'Token tidak valid.';
        }

        if (
            resetPasswordDto.newPassword !==
            resetPasswordDto.confirmNewPassword
        ) {
            return 'Password baru tidak sama.';
        }

        // update password
        user.password = resetPasswordDto.newPassword;

        // token hanya boleh digunakan sekali
        user.resetToken = undefined;

        return 'Password berhasil diubah.';
    }
}