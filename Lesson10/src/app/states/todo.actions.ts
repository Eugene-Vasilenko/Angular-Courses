import { Todo } from "../models/todo";

export namespace TodoActions {

    export class FetchTodos {
        static readonly type = '[todos] fetch todos';
        constructor() { }
    }


    export class AddTodo {
        static readonly type = '[todos] add todo';
        constructor(public todo: Todo) { }
    }


    export class UpdateTodo {
        static readonly type = '[todos] update todo';
        constructor(public todo: Todo) { }
    }


    export class DeleteTodo {
        static readonly type = '[todos] delete todo';
        constructor(public id: number) { }
    }
}