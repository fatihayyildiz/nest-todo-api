import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  UseGuards,
  Req,
} from '@nestjs/common';
import { TodosService } from './todos.service';
import { TodoDTO } from './todo.dto';
import { ApiTags } from '@nestjs/swagger';
import JwtAuthenticationGuard from '../authentication/passport/jwt-authentication.guard';
import RequestWithUser from '../authentication/passport/requestWithUser.interface';

@ApiTags('todo')
@Controller('todo')
export class TodosController {
  constructor(private readonly todoService: TodosService) {}

  @Get()
  @UseGuards(JwtAuthenticationGuard)
  public async getAll(@Req() request: RequestWithUser): Promise<TodoDTO[]> {
    const { user } = request;
    return await this.todoService.getAll(user);
  }

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  public async post(
    @Req() request: RequestWithUser,
    @Body() dto: TodoDTO,
  ): Promise<TodoDTO> {
    const { user } = request;
    return this.todoService.create(dto, user);
  }

  @Put()
  @UseGuards(JwtAuthenticationGuard)
  public async put(
    @Req() request: RequestWithUser,
    @Body() dto: TodoDTO,
  ): Promise<TodoDTO> {
    const { user } = request;
    return this.todoService.updateById(dto, user);
  }
}
