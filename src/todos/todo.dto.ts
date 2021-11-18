import { IsString, IsBoolean, IsNumber } from 'class-validator';
import { Todo } from '../model/todo.entity';
import { User } from '../user.decorator';

export class TodoDTO implements Readonly<TodoDTO> {
  @IsNumber()
  id: number;

  @IsString()
  text: string;

  @IsBoolean()
  completed: boolean;

  public static from(dto: Partial<TodoDTO>) {
    const it = new TodoDTO();
    it.id = dto.id;
    it.text = dto.text;
    it.completed = dto.completed;
    return it;
  }

  public static fromEntity(entity: Todo) {
    return this.from({
      id: entity.id,
      text: entity.text,
      completed: entity.completed,
    });
  }

  public static toEntity(dto: Partial<TodoDTO>, user: User = null) {
    const it = new Todo();
    it.text = dto.text;
    it.completed = dto.completed;
    it.createDateTime = new Date();
    it.createdBy = user ? user.id : null;
    it.lastChangedBy = user ? user.id : null;
    return it;
  }
}
