import { Todo } from '../model/todo.entity';
import { User } from '../user.decorator';
export declare class TodoDTO implements Readonly<TodoDTO> {
    id: number;
    text: string;
    completed: boolean;
    static from(dto: Partial<TodoDTO>): TodoDTO;
    static fromEntity(entity: Todo): TodoDTO;
    static toEntity(dto: Partial<TodoDTO>, user?: User): Todo;
}
