import { Component, OnInit } from '@angular/core';
import { Todo } from '../classes/todo';
import { NgForm } from '@angular/forms';

const TODOS: Todo[] = [
  { id: 1, task: 'Do shopping' },
  { id: 2, task: 'Wash the car' },
  { id: 3, task: 'Clean up the flat' },
  { id: 4, task: 'Go for a walk with dog' }
];

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  todos: Todo[] = TODOS;
  isAddButtonClicked = false;
  selectedTodo: Todo = new Todo;
  constructor() { }

  ngOnInit() {
  }

  removeTodo(todoToRemove: Todo) {
    this.todos.forEach((el, index, array) => {
      if (el.id === todoToRemove.id) {
        array.splice(index, 1);
      }
    });
  }

  showDialogForNewTodo() {
    this.isAddButtonClicked = true;
  }

  closeAddingEventHandler(isCloseClicked: boolean) {
    if (isCloseClicked === true) {
      this.isAddButtonClicked = false;
    }
  }

  addTodoToListEventHandler(todoForm: NgForm) {
    const todo: Todo = {
      id: Number(todoForm.value.id),
      task: todoForm.value.task,
    };
    let isIDonList = false;
    this.todos.forEach((el) => {
      if (el.id === todo.id) {
        isIDonList = true;
      }
    });

    if (!isIDonList) {
      this.todos.push(todo);
      this.todos.sort((a, b) => a.id - b.id);
    }
  }

  editTodo(todo: Todo) {
    this.selectedTodo = todo;
  }

  sendTodoToListEventHandler(todo: Todo) {
    this.todos.forEach((el, index, array) => {
      if (el.id === todo.id) {
        array[index].task = todo.task;
      }
    });
    this.selectedTodo = null;
  }
}
