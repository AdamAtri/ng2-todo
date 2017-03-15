import { Component } from '@angular/core';
import { TodoDataService } from "./todo-data.service";
import { Todo } from "./todo"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ TodoDataService ]
})
export class AppComponent {

  // Constructor:
  //  Inject the token 'TodoDataService' and assign it to the <dataService> property
  constructor(private dataService: TodoDataService) { }

  // variable: newTodo
  //  A new <Todo> to instance to add to the <dataService>'s Todo list
  newTodo:Todo = new Todo();

  // function: addTodo
  //  Adds a new <Todo> instance the <dataService>'s Todo list
  addTodo() {
    this.dataService.addTodo(this.newTodo);
    this.newTodo = new Todo();
  }
  // function: toggleComplete
  //  Calls on the <dataService> to toggle the <todo>'s complete property
  toggleComplete(todo) {
    this.dataService.toggleTodoComplete(todo);
  }
  // function: removeTodo
  //  Calls on the <dataService> to remove the <todo> instance
  removeTodo(todo) {
    this.dataService.deleteTodoById(todo.id);
  }
  // property: todos
  //  Gets the list of todos
  get todos() {
    return this.dataService.getAllTodos();
  }
}
