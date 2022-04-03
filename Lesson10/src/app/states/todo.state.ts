import { Injectable } from "@angular/core";
import { Action, NgxsOnInit, Selector, State, StateContext } from "@ngxs/store";
import { Todo } from "../models/todo";
import { TodoService } from "../services/todo.service";
import { TodoActions } from "./todo.actions";
import { patch, updateItem } from "@ngxs/store/operators";
import { tap } from "rxjs";

export interface TodoStateModel {
    todos: Todo[];
}

@State<TodoStateModel>({
    name: 'todos',
    defaults: {
        todos: []
    }
})
@Injectable()
export class TodoState implements NgxsOnInit {

    constructor(private todoService: TodoService) {

    }

    ngxsOnInit(ctx?: StateContext<any>) {
        ctx?.dispatch(new TodoActions.FetchTodos());
    }

    @Selector()
    static todos(state: TodoStateModel) {
        return state.todos;
    }

    @Action(TodoActions.FetchTodos)
    fetchTodos(ctx: StateContext<TodoStateModel>) {

        return this.todoService.getTodos()
            .pipe(tap(todos => {

                const state = ctx.getState();

                ctx.setState({ ...state, todos: todos });
            }));

    }


    @Action(TodoActions.AddTodo)
    addTodo(ctx: StateContext<TodoStateModel>, payload: TodoActions.AddTodo) {

        return this.todoService.addTodo(payload.todo)
            .pipe(tap(todo => {

                const state = ctx.getState();

                ctx.setState({ ...state, todos: [...state.todos, todo] });
            }));

    }


    @Action(TodoActions.UpdateTodo)
    updateTodo(ctx: StateContext<TodoStateModel>, payload: TodoActions.UpdateTodo) {

        return this.todoService.updateTodo(payload.todo)
            .pipe(tap(todo => {
                ctx.setState(patch({ todos: updateItem(i => i!.id === payload.todo.id, todo) }));
            }));
    }

    @Action(TodoActions.DeleteTodo)
    deleteTodo(ctx: StateContext<TodoStateModel>, payload: TodoActions.DeleteTodo) {

        return this.todoService.deleteTodo(payload.id)
            .pipe(tap(() => {

                const state = ctx.getState();

                ctx.setState({ ...state, todos: state.todos.filter(i => i.id != payload.id) });
            }));
    }


}
