import { Column, Entity } from 'typeorm';
import { BaseEntity } from './base.entity';

@Entity()
class User extends BaseEntity {
  @Column({ unique: true })
  public email: string;

  @Column({ default: 'John Doe' })
  public name: string;

  @Column()
  public password: string;
}

export default User;
