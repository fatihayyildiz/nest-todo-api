import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TodosService } from './todos.service';
import { TodosController } from './todos.controller';
import { Todo } from '../model/todo.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Todo])],
  providers: [TodosService],
  controllers: [TodosController],
  exports: [],
})
export class TodoModule {}
