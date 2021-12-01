import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: any[] = [];
  
  constructor( private _http:HttpClient ) {
    this.getTasks();
  }

  getTasks(): void{
    this._http.get("http://localhost:7077/")
    .subscribe( (data:any) => {
      this.tasks = data;
    });
    console.log( "Getting tasks from our localhost:7077" );
  }

  oneTask( _id:string ){
    return this._http.get(`http://localhost:7077/${_id}`)
  }
}
