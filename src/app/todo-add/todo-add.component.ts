import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Todo } from '../classes/todo';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.css']
})
export class TodoAddComponent implements OnInit {

  @Output() closeAddingEvent: EventEmitter<boolean> = new EventEmitter();
  @Output() addTaskToListEvent: EventEmitter<object> = new EventEmitter();
  isCloseClicked = false;

  constructor() { }

  ngOnInit() {
  }

  cancelAddingTask() {
    this.isCloseClicked = true;
    this.closeAddingEvent.emit(this.isCloseClicked);
  }

  addNewTaskToList(taskForm: NgForm) {
    this.addTaskToListEvent.emit(taskForm);
    this.isCloseClicked = true;
    this.closeAddingEvent.emit(this.isCloseClicked);
  }
}
