import { Module } from '@nestjs/common';
import { PublishersService } from './publishers.service.js';
import { PublishersController } from './publishers.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Publisher } from './entities/publisher.entity.js';

@Module({
  controllers: [PublishersController],
  imports: [TypeOrmModule.forFeature([Publisher])],
  providers: [PublishersService],
})
export class PublishersModule {}
