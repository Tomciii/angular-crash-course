import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/Tasks';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css', '../../app.component.css']
})
export class AddTaskComponent implements OnInit {

  text!:string;
  day!:string;
  reminder: boolean = false;
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit() {
    if(!this.text){
      alert('Please add a task!');
      return;
    }

    const newTask:Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder
    }

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
  }
}
