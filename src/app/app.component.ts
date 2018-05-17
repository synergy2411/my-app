import { Component, OnInit } from '@angular/core';
import { User } from './model/user';
import { DataService } from './services/data.service';
//import { USER_DATA } from './data/mocks';
import * as firebase from 'firebase';
import { AuthService } from './services/auth-service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  data : string;
  users : User[];
  
  constructor(public dataService : DataService,
              public authService : AuthService){}

  logout(){
    this.authService.signout();
  }
  increment(){
    this.dataService.counter++;
  } 
  ngOnInit(){
    //this.users = USER_DATA;
    //this.users = this.dataService.getUserData();
    this.dataService.getUserData()
      //.subscribe(userdata=>this.users = userdata);
      firebase.initializeApp({
        apiKey: "AIzaSyBIajGMCakWabwOV_KDBoIIDhhgb94XzTA",
        authDomain: "auth-proj-23826.firebaseapp.com"
      });
  }
  onChildEvent(data : string){
    console.log(data);
    this.data = data;
  }


}

// npm install firebase --save