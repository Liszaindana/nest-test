import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service.js';
import { CategoriesController } from './categories.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Category } from './entities/category.entity.js';

@Module({
  controllers: [CategoriesController],
  imports: [TypeOrmModule.forFeature([Category])],
  providers: [CategoriesService],
})
export class CategoriesModule {}
