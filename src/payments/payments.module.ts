import { Module } from '@nestjs/common';
import { PaymentsService } from './payments.service.js';
import { PaymentsController } from './payments.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Payment } from './entities/payment.entity.js';

@Module({
  controllers: [PaymentsController],
  imports: [TypeOrmModule.forFeature([Payment])],
  providers: [PaymentsService],
})
export class PaymentsModule {}
