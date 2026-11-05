import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import type { Relation } from 'typeorm';
import { Customer } from './customer.entity.js';
import { BaseEntity } from '../../common/entities/base.entity.js';

@Entity({ name: 'customer_addresses' })
export class CustomerAddress extends BaseEntity {
  @Column({ name: 'customer_id', type: 'uuid' })
  customerId: string;

  @ManyToOne(() => Customer, (customer) => customer.addresses, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'customer_id' })
  customer: Relation<Customer>;

  @Column({ name: 'recipient_name', type: 'varchar', length: 150 })
  recipientName: string;

  @Column({ type: 'varchar', length: 20 })
  phone: string;

  @Column({ type: 'text' })
  address: string;

  @Column({ type: 'varchar', length: 100 })
  city: string;

  @Column({ name: 'postal_code', type: 'varchar', length: 10 })
  postalCode: string;

}
