import { Column, Entity, OneToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import { Book } from '../../books/entities/book.entity.js';
import { BaseEntity } from '../../common/entities/base.entity.js';

@Entity({ name: 'categories' })
export class Category extends BaseEntity {
  @Column({ type: 'varchar', length: 100, unique: true })
  name: string;

  @OneToMany(() => Book, (book) => book.category)
  books?: Relation<Book[]>;

}
