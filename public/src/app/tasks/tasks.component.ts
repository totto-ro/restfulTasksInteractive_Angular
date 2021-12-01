import { Component, OnInit } from '@angular/core';
import { TaskService } from './task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  taskList: any[] = []
  taskById: any;
  showingTask= false;
  constructor( private _taskService: TaskService ) { }

  ngOnInit(): void {
    this.oneTask('');
  }

  getAllTasks(): void {
    console.log("Fetching task list")
    this.taskList = this._taskService.tasks;
  }

  oneTask( _id:string ): void{
    let observable = this._taskService.oneTask( _id );
    
    observable.subscribe( (data:any) =>{
      this.taskById = data;
      console.log("One result By ID: ", this.taskById);
    });
  }

  OnShow(event:any){
    let id:string = event.target.id;
    this.oneTask(id);
    this.showingTask=true;
    
  }

}
