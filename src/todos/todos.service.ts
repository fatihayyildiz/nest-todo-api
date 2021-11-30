import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Todo } from '../model/todo.entity';
import { TodoDTO } from './todo.dto';
import User from '../model/user.entity';

@Injectable()
export class TodosService {
  constructor(
    @InjectRepository(Todo)
    private readonly todosRepository: Repository<Todo>,
  ) {}

  getAll(user: User): Promise<TodoDTO[]> {
    return this.todosRepository
      .find({ relations: ['user'], where: { user: { id: user.id } } })
      .then((items) => items.map((e) => TodoDTO.fromEntity(e)));
  }

  public async create(dto: TodoDTO, user: User): Promise<TodoDTO> {
    return this.todosRepository
      .save(TodoDTO.toEntity(dto, user))
      .then((e) => TodoDTO.fromEntity(e));
  }

  public async updateById(dto: TodoDTO, user: User): Promise<TodoDTO> {
    const foundProperty = await this.todosRepository.findOne({
      where: { id: dto.id },
    });
    if (foundProperty)
      return this.todosRepository
        .save({ ...foundProperty, ...TodoDTO.toEntity(dto, user) })
        .then((e) => TodoDTO.fromEntity(e));
    else
      throw new HttpException(
        'Todo with provided id is not exists',
        HttpStatus.BAD_REQUEST,
      );
  }
}
