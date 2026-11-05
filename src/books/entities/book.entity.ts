import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import type { Relation } from 'typeorm';
import { Category } from '../../categories/entities/category.entity.js';
import { Publisher } from '../../publishers/entities/publisher.entity.js';
import { Author } from '../../authors/entities/author.entity.js';
import { OrderItem } from '../../orders/entities/order-item.entity.js';
import { decimalTransformer } from '../../common/transformers/decimal.transformer.js';
import { BaseEntity } from '../../common/entities/base.entity.js';

@Entity({ name: 'books' })
export class Book extends BaseEntity {
  @Column({ type: 'varchar', length: 30 })
  title: string;

  @Column({ type: 'varchar', length: 45, unique: true })
  isbn: string;

  @Column({ name: 'published_year', type: 'int', default: 0 })
  publishedYear: number;

  @Column({ name: 'is_available', type: 'boolean', default: true })
  isAvailable: boolean;

  @Column({ type: 'decimal', precision: 12, scale: 2, default: 0, transformer: decimalTransformer })
  price?: number;

  @Column({ type: 'int', default: 0 })
  stock?: number;

  @Column({ name: 'category_id', type: 'uuid' })
  categoryId?: string;

  @ManyToOne(() => Category, (category) => category.books, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'category_id' })
  category?: Relation<Category>;

  @Column({ name: 'publisher_id', type: 'uuid' })
  publisherId?: string;

  @ManyToOne(() => Publisher, (publisher) => publisher.books, { onDelete: 'RESTRICT' })
  @JoinColumn({ name: 'publisher_id' })
  publisher?: Relation<Publisher>;

  @ManyToMany(() => Author, (author) => author.books)
  @JoinTable({
    name: 'book_authors',
    joinColumn: { name: 'book_id', referencedColumnName: 'id' },
    inverseJoinColumn: { name: 'author_id', referencedColumnName: 'id' },
  })
  authors?: Relation<Author[]>;

  @OneToMany(() => OrderItem, (orderItem) => orderItem.book)
  orderItems?: Relation<OrderItem[]>;

  @DeleteDateColumn({ name: 'deleted_at', type: 'timestamp', nullable: true })
  deletedAt: Date | null;
}
