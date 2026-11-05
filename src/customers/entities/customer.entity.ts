import { Column, DeleteDateColumn, Entity, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import { CustomerAddress } from './customer-address.entity.js';
import { Order } from '../../orders/entities/order.entity.js';
import { BaseEntity } from '../../common/entities/base.entity.js';

@Entity({ name: 'customers' })
export class Customer extends BaseEntity {
  @Column({ type: 'varchar', length: 150 })
  name: string;

  @Column({ type: 'varchar', length: 150, unique: true })
  email: string;

  @Column({ type: 'varchar', length: 20 })
  phone: string;

  @OneToMany(() => CustomerAddress, (address) => address.customer)
  addresses?: Relation<CustomerAddress[]>;

  @OneToMany(() => Order, (order) => order.customer)
  orders?: Relation<Order[]>;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt: Date | null;
}
