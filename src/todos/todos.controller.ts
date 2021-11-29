import { Controller, Get, Post, Body, Put, UseGuards } from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodoDTO } from './todo.dto';
import { User } from '../user.decorator';
import { ApiTags } from '@nestjs/swagger';
import JwtAuthenticationGuard from '../authentication/passport/jwt-authentication.guard';

@ApiTags('todo')
@Controller('todo')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  @UseGuards(JwtAuthenticationGuard)
  public async getAll(): Promise<TodoDTO[]> {
    return await this.todoService.getAll();
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  public async post(
    @User() user: User,
    @Body() dto: TodoDTO,
  ): Promise<TodoDTO> {
    return this.todoService.create(dto, user);
  }

  @Put()
  @UseGuards(JwtAuthenticationGuard)
  public async put(@User() user: User, @Body() dto: TodoDTO): Promise<TodoDTO> {
    return this.todoService.updateById(dto, user);
  }
}
