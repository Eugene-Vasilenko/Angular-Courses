import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  identityIndex = 0;
  key = 'todos';
  todos!: Todo[];

  constructor() {
    this.restoreTodos();
    this.identityIndex = this.todos.length
      ? Math.max(...this.todos.map(i => i.id)) + 1
      : 0;
  }

  getTodos(): Observable<Todo[]> {
    return of([...this.todos]);
  }

  addTodo(todo: Todo): Observable<Todo> {
    todo.id = this.identityIndex++;
    this.todos.push(todo);
    this.saveTodos();
    return of(todo);
  }

  updateTodo(todo: Todo): Observable<Todo> {
    const index = this.todos.findIndex(i => i.id === todo.id);
    if (index === -1) {
      throw new Error("Todo with id: " + todo.id + " not found");
    }
    this.todos[index] = todo;
    this.saveTodos();
    return of(todo);
  }

  deleteTodo(id: number): Observable<void> {
    const index = this.todos.findIndex(i => i.id === id);
    if (index === -1) {
      throw new Error("Todo with id: " + id + " not found");
    }
    this.todos.splice(index, 1);
    this.saveTodos();
    return of(void 0);
  }

  private restoreTodos() {
    const todosValue = localStorage.getItem(this.key);
    this.todos = todosValue?.length
      ? JSON.parse(todosValue)
      : [];
  }

  private saveTodos() {
    const todosValue = JSON.stringify(this.todos);
    localStorage.setItem(this.key, todosValue);
  }


}