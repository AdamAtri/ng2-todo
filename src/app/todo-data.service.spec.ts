/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TodoDataService } from './todo-data.service';
import { Todo } from "./todo";

describe('TodoDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoDataService]
    });
  });

  it('should ...', inject([TodoDataService], (service: TodoDataService) => {
    expect(service).toBeTruthy();
  }));

  describe('#getAllTodos()', () => {
    it('should return an empty array by default', inject([TodoDataService],
       (service: TodoDataService) => { expect(service.getAllTodos()).toEqual([ ]); }));

    it('should return all todos', inject([TodoDataService],
        (service:TodoDataService) => {
          let todo1 = new Todo({title:"Your mom's box", complete: false});
          let todo2 = new Todo({title:"Planet of the Apes", complete: true});
          service.addTodo(todo1);
          service.addTodo(todo2);
          expect(service.getAllTodos()).toEqual([todo1, todo2]);
        }));
  });

  describe('#save(todo)', () => {
    it('should automatically assign an incrementing id', inject([TodoDataService],
        (service:TodoDataService) => {
          let todo1 = new Todo({title: "Veganism is Satanism", complete: false});
          let todo2 = new Todo({title: "Hitler was a Vegan", complete: false});
          service.addTodo(todo1);
          service.addTodo(todo2);
          expect(service.getTodoById(1)).toEqual(todo1);
          expect(service.getTodoById(2)).toEqual(todo2);
        }));
  });

  describe('#deleteTodoById(id)', () => {
    it('should remove the todo item with the corresponding id', inject([TodoDataService],
        (service:TodoDataService) => {
          let todo1 = new Todo({title: "Bore me", complete: true});
          let todo2 = new Todo({title: "Fuck you", complete: false});
          service.addTodo(todo1);
          service.addTodo(todo2);
          expect(service.getAllTodos()).toEqual([todo1, todo2]);
          service.deleteTodoById(1);
          expect(service.getAllTodos()).toEqual([todo2]);
          service.deleteTodoById(2);
          expect(service.getAllTodos()).toEqual([ ]);
        }));

    it('should not do anything if the id cannot be found', inject([TodoDataService],
        (service:TodoDataService) => {
          let todo1 = new Todo({title: "Bore me", complete: true});
          let todo2 = new Todo({title: "Fuck you", complete: false});
          service.addTodo(todo1);
          service.addTodo(todo2);
          expect(service.getAllTodos()).toEqual([todo1, todo2]);
          service.deleteTodoById(3);
          expect(service.getAllTodos()).toEqual([todo1, todo2]);
        }));
  });

  describe('#updateTodoById(id, values)', () => {
    it('should return todo with the corresponding id and update data',
        inject([TodoDataService], (service:TodoDataService) => {
          let todo = new Todo({title:"Update me", complete:false});
          service.addTodo(todo);
          let newTitle = "Thankyou";
          let updatedTodo = service.updateTodoById(1, {title: newTitle});
          expect(updatedTodo.title).toEqual(newTitle);
        }));

    it('should return null if todo is not found', inject([TodoDataService],
        (service:TodoDataService) => {
          let todo = new Todo({title:"I'm new", complete:false});
          service.addTodo(todo);
          let updatedTodo = service.updateTodoById(2, {title: "I'm not here"});
          expect(updatedTodo).toEqual(null);
        }));
  });

  describe('#toggleTodoComplete(todo)', () => {
    it('should return the updated todo with inverse complete status',
        inject([TodoDataService], (service:TodoDataService) => {
          let todo = new Todo({title:"Complete me", complete:false});
          service.addTodo(todo);
          let updatedTodo = service.toggleTodoComplete(todo);
          expect(updatedTodo.complete).toEqual(true);
          updatedTodo = service.toggleTodoComplete(todo);
          expect(updatedTodo.complete).toEqual(false);
        }));
  });
});
