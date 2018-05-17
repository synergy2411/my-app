import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Component({
  selector: 'app-observable-demo',
  templateUrl: './observable-demo.component.html',
  styleUrls: ['./observable-demo.component.css']
})
export class ObservableDemoComponent implements OnInit {
  num : number;
  data : any;
  numbers = Observable.interval(1000).subscribe(num=>this.num=num);
  unsubscribe(){
    this.numbers.unsubscribe();
  }
  values = Observable.create((observer)=>{
    setTimeout(()=>{
      observer.next(101);
    },1000);
    setTimeout(()=>{
      observer.next(102);
    },2000);
    setTimeout(()=>{
      observer.next(103);
    },3000);
    setTimeout(()=>{
      observer.complete();
    },4000);
    setTimeout(()=>{
      observer.next(104);
    },5000);
  })
  .subscribe(
    (data)=>this.data=data,
    (err)=>console.log(err),
    ()=>console.log("Completed!")
  )

  constructor() { }

  ngOnInit() {
    
  }

}
