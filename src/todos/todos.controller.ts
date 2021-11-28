import { Controller, Get, Post, Body, Put } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodoDTO } from './todo.dto';
import { User } from '../user.decorator';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('todo')
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

  @Put()
  public async put(@User() user: User, @Body() dto: TodoDTO): Promise<TodoDTO> {
    return this.todoService.updateById(dto, user);
  }
}
