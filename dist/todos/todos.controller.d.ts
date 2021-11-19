import { TodosService } from './todos.service';
import { TodoDTO } from './todo.dto';
import { User } from '../user.decorator';
export declare class TodosController {
    private readonly todoService;
    constructor(todoService: TodosService);
    getAll(): Promise<TodoDTO[]>;
    post(user: User, dto: TodoDTO): Promise<TodoDTO>;
}
