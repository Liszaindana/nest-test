import { Module } from '@nestjs/common';
import { CustomersService } from './customers.service.js';
import { CustomersController } from './customers.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './entities/customer.entity.js';
import { CustomerAddress } from './entities/customer-address.entity.js';

@Module({
  controllers: [CustomersController],
  imports: [TypeOrmModule.forFeature([Customer, CustomerAddress])],
  providers: [CustomersService],
})
export class CustomersModule {}
