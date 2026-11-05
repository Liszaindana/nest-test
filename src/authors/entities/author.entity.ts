import { Column, Entity, ManyToMany } from 'typeorm';
import type { Relation } from 'typeorm';
import { Book } from '../../books/entities/book.entity.js';
import { BaseEntity } from '../../common/entities/base.entity.js';

@Entity({ name: 'authors' })
export class Author extends BaseEntity {
  @Column({ type: 'varchar', length: 150 })
  name: string;

  @ManyToMany(() => Book, (book) => book.authors)
  books?: Relation<Book[]>;
}
