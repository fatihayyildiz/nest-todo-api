import { Entity, Column } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity({ name: 'todo' })
export class Todo extends BaseEntity {
  @Column()
  text: string;

  @Column({ default: false })
  completed: boolean;
}
