import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import type { Relation } from 'typeorm';
import { Order } from '../../orders/entities/order.entity.js';
import { decimalTransformer } from '../../common/transformers/decimal.transformer.js';

@Entity({ name: 'payments' })
export class Payment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'order_id', type: 'uuid' })
  orderId: string;

  @ManyToOne(() => Order, (order) => order.payments, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'order_id' })
  order: Relation<Order>;

  @Column({ name: 'payment_method', type: 'varchar', length: 50 })
  paymentMethod: string;

  @Column({ type: 'decimal', precision: 12, scale: 2, transformer: decimalTransformer })
  amount: number;

  @Column({ type: 'varchar', length: 30, default: 'pending' })
  status: string;

  @Column({ name: 'paid_at', type: 'timestamp', nullable: true })
  paidAt: Date | null;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}
