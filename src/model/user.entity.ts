import { Column, Entity, OneToMany } from 'typeorm';
import { BaseEntity } from './base.entity';
import { Todo } from './todo.entity';

@Entity()
class User extends BaseEntity {
  @Column({ unique: true })
  public email: string;

  @Column({ default: 'John Doe' })
  public name: string;

  //TODO: exclude this password field from responses
  //@Column({ select: false })
  @Column()
  public password: string;

  @OneToMany(() => Todo, (todo: Todo) => todo.user)
  todos: Todo[];
}

export default User;
