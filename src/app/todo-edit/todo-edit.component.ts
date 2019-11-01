import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Todo } from '../classes/todo';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-todo-edit',
  templateUrl: './todo-edit.component.html',
  styleUrls: ['./todo-edit.component.css']
})
export class TodoEditComponent implements OnInit {

  @Input() selectedTodo: Todo = new Todo();
  @Output() sendTodoToListEvent: EventEmitter<NgForm> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  sendTodoToList(todoForm: NgForm) {
    this.sendTodoToListEvent.emit(todoForm.value);
  }

}
