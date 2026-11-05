import { Entity, OneToMany, Column } from 'typeorm';
import type { Relation } from 'typeorm';
import { Book } from '../../books/entities/book.entity.js';
import { BaseEntity } from '../../common/entities/base.entity.js';

@Entity({ name: 'publishers' })
export class Publisher extends BaseEntity {
  @Column({ type: 'varchar', length: 150 })
  name: string;

  @OneToMany(() => Book, (book) => book.publisher)
  books?: Relation<Book[]>;

}
