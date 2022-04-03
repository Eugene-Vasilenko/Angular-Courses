import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { Todo } from './models/todo';
import { TodoActions } from './states/todo.actions';
import { TodoState, TodoStateModel } from './states/todo.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @Select(TodoState.todos) todos$!: Observable<Todo[]>

  constructor(private store: Store) {

  }

  addTodo(title: string) {
    const newTodo = <Todo>{ title: title, isDone: false, id: 0 };
    this.store.dispatch(new TodoActions.AddTodo(newTodo));
  }

  toggleTodoState(todo: Todo) {
    const updatedTodo = <Todo>{ ...todo, isDone: !todo.isDone };
    this.store.dispatch(new TodoActions.UpdateTodo(updatedTodo));
  }

  deleteTodo(id: number) {
    this.store.dispatch(new TodoActions.DeleteTodo(id));
  }
}
