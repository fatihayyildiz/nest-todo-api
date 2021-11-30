import {
  Entity,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';
import { BaseEntity } from './base.entity';
import User from './user.entity';

@Entity({ name: 'todo' })
export class Todo extends BaseEntity {
  @Column()
  text: string;

  @Column({ default: false })
  completed: boolean;

  @Column({ default: true })
  isActive: boolean;

  @CreateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  createDateTime: Date;

  @UpdateDateColumn({ type: 'timestamptz', default: () => 'CURRENT_TIMESTAMP' })
  lastChangedDateTime: Date;

  @ManyToOne(() => User, (user: User) => user.todos)
  user: User;
}
