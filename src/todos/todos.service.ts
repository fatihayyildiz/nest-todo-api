import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../model/todo.entity';
import { TodoDTO } from './todo.dto';
import { User } from '../user.decorator';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todosRepository: Repository<Todo>,
  ) {}

  getAll(): Promise<TodoDTO[]> {
    return this.todosRepository
      .find()
      .then((items) => items.map((e) => TodoDTO.fromEntity(e)));
  }

  public async create(dto: TodoDTO, user: User): Promise<TodoDTO> {
    return this.todosRepository
      .save(TodoDTO.toEntity(dto, user))
      .then((e) => TodoDTO.fromEntity(e));
  }
}
