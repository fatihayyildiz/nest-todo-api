import { Repository } from 'typeorm';
import { Todo } from '../model/todo.entity';
import { TodoDTO } from './todo.dto';
import { User } from '../user.decorator';
export declare class TodosService {
    private readonly todosRepository;
    constructor(todosRepository: Repository<Todo>);
    getAll(): Promise<TodoDTO[]>;
    create(dto: TodoDTO, user: User): Promise<TodoDTO>;
}
