/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
  - `npm run test-todo-list`
*/

class Todo {
  constructor() {
    this.todosArray = [];
  }

  add(todo) {
    this.todosArray.push(todo);
  }

  remove(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todosArray.length) {
      return;
    }
    this.todosArray.splice(indexOfTodo, 1);
  }

  update(index, updatedTodo) {
    if (index < 0 || index >= this.todosArray.length) {
      return;
    }
    this.todosArray[index] = updatedTodo;
  }

  getAll() {
    return this.todosArray;
  }

  get(indexOfTodo) {
    if (indexOfTodo < 0 || indexOfTodo >= this.todosArray.length) {
      return null;
    }
    return this.todosArray[indexOfTodo];
  }

  clear() {
    this.todosArray.length = 0;
  }
}

module.exports = Todo;
