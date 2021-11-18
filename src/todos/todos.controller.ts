import { Controller, Get, Post, Body } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodoDTO } from './todo.dto';
import { User } from '../user.decorator';

@Controller('todo')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  public async getAll(): Promise<TodoDTO[]> {
    return await this.todoService.getAll();
  }

  @Post()
  public async post(
    @User() user: User,
    @Body() dto: TodoDTO,
  ): Promise<TodoDTO> {
    return this.todoService.create(dto, user);
  }
}
