import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe-demo',
  templateUrl: './pipe-demo.component.html',
  styleUrls: ['./pipe-demo.component.css']
})
export class PipeDemoComponent implements OnInit {
  filteredStatus = "";
  addNewTodo(){
    this.todos.push({label : "New Work", status :"pending"})
  }
  todos = [{
    label : "Some Work",
    status : "done"
  },{
    label : "Some Work",
    status : "pending"
  },{
    label : "Some Work",
    status : "done"
  },{
    label : "Some Work",
    status : "pending"
  }]

  someNumber = new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve(1000);
    }, 1500);
  });



  constructor() { }

  ngOnInit() {
  }

}
