import { Component, OnInit } from '@angular/core';
import { FormControl, 
  FormGroup, 
  FormBuilder, 
  Validators } from '@angular/forms';
import { AuthService } from '../services/auth-service';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  username = new FormControl('',[
    Validators.required,
    Validators.email,
    Validators.minLength(5)
  ]);
  password = new FormControl('',[
    Validators.required,
    this.hasExclamationMark
  ]);

  loginForm : FormGroup;

  hasExclamationMark(input : FormControl){
    //console.log(input.root.value);
    const hasExclamation = input.value.indexOf("!") >= 0;
    return hasExclamation ? null : { needExclamation : true}
  }
  
  constructor(private builder : FormBuilder, 
              private authService : AuthService,
              private dataService : DataService) { 
    this.loginForm = builder.group({
      username : this.username,
      password : this.password
    });
  }
  signup(){
    console.log(this.loginForm.value.username);
    console.log(this.loginForm.value.password);
    this.authService.signup(
      this.loginForm.value.username,
      this.loginForm.value.password
    );
  }
  signIn(){
    this.authService.signin(
      this.loginForm.value.username,
      this.loginForm.value.password
    );
  }
  getData(){
    alert("Calling Remote API");
    this.dataService.getApiData();
  }

  ngOnInit() {
  }

}
