import { Injectable } from '@angular/core';
import { Todo } from './todo';

@Injectable()
export class TodoDataService {

  // variable: _lastId
  //  Placeholder for last id so we can simulate automatic incrementing of id's
  _lastId: number = 0;
  // variable: todos
  //  Placeholder for the todos list
  todos: Todo[] = [ ];

  constructor() { }

  // function: addTodo
  //  Adds a <Todo> item to the <todos> list
  addTodo(todo: Todo): TodoDataService {
    if (! todo.id) { todo.id = ++this._lastId; }
    this.todos.push(todo);
    return this;
  }
  // function: deleteTodoById
  //  Removes a <todo> item for the <todos> list by filtering out any items
  //  that match the supplied id.
  deleteTodoById(id: number): TodoDataService {
    this.todos = this.todos.filter( todo => todo.id !== id );
    return this;
  }
  // function: updateTodoById
  //  Updates the <todo> that corresponds to supplied id with supplied values
  updateTodoById(id: number, values: Object={}): Todo {
    let todo = this.getTodoById(id);
    if (! todo) return null;
    Object.assign(todo, values);
    return todo;
  }
  // function: getTodoById
  //  Returns the <todo> item that corresponds to the supplied id
  getTodoById(id: number): Todo {
    let result = this.todos.filter(todo => todo.id === id);
    return(result.pop());
  }
  // function: getAllTodos
  //  Returns the entire <todos> list
  getAllTodos():Todo[] {
    return this.todos;
  }
  // function: toggleTodoComplete
  //  Marks the supplied <todo> as complete.
  toggleTodoComplete(todo: Todo): Todo {
    let updateTodo = this.updateTodoById(todo.id, {complete: !todo.complete});
    return updateTodo;
  }
}
