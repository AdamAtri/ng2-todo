import {Todo} from './todo';

describe('Todo', () => {
  it('should create an instance', () => {
    expect(new Todo()).toBeTruthy();
  });

  it('should accept values in the constructor', () => {
    let todo = new Todo({
      title: "Your mom's box.",
      complete: true
    });
    expect(todo.title).toEqual("Your mom's box.");
    expect(todo.complete).toEqual(true);
  });
});
