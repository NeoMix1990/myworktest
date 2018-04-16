import { Component, OnInit } from '@angular/core';
import { ITask } from './task';
import { TaskService } from '../../../task.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  constructor(private task: TaskService) { }

  public ourTasks: ITask[];

	ngOnInit() {
		this.getTask();
	}

	getTask() {
    this.task.getTask()
    .subscribe(
      tasks => {
        this.ourTasks = tasks.message.tasks;
        console.log(this.ourTasks);
      }
    );
  }

}
