import { IsString, IsBoolean, IsNumber, IsDate } from 'class-validator';
import { Todo } from '../model/todo.entity';
import { ApiProperty } from '@nestjs/swagger';
import User from '../model/user.entity';

export class TodoDTO implements Readonly<TodoDTO> {
  @IsNumber()
  id: number;

  @ApiProperty({
    description: 'Detail of todo description',
  })
  @IsString()
  text: string;

  @ApiProperty({
    description: 'Status of todo. Default is false',
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  completed: boolean;

  @ApiProperty({
    description: 'Visibility status of todo. Default is true',
    required: false,
    type: Boolean,
  })
  @IsBoolean()
  isActive: boolean;

  @IsDate()
  createDateTime: Date;

  @ApiProperty({
    description:
      'Last updated time of todo. Changes when todo set completed or not',
    required: false,
    type: Date,
  })
  @IsDate()
  lastChangedDateTime: Date;

  user: User;

  public static from(dto: Partial<TodoDTO>) {
    const it = new TodoDTO();
    it.id = dto.id;
    it.text = dto.text;
    it.completed = dto.completed;
    it.isActive = dto.isActive;
    it.createDateTime = dto.createDateTime;
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.user = dto.user;
    return it;
  }

  public static fromEntity(entity: Todo) {
    return this.from({
      id: entity.id,
      text: entity.text,
      completed: entity.completed,
      isActive: entity.isActive,
      createDateTime: entity.createDateTime,
      lastChangedDateTime: entity.lastChangedDateTime,
      user: entity.user,
    });
  }

  public static toEntity(dto: Partial<TodoDTO>, user: User = null) {
    const it = new Todo();
    it.text = dto.text;
    it.completed = dto.completed;
    it.isActive = dto.isActive;
    it.createDateTime = new Date();
    it.lastChangedDateTime = dto.lastChangedDateTime;
    it.createdBy = user ? user.email : null;
    it.lastChangedBy = user ? user.email : null;
    it.user = user;
    return it;
  }
}
