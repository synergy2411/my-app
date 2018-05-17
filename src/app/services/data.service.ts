import { USER_DATA } from "../data/mocks";
import { Injectable } from "@angular/core";
import { Http } from '@angular/http';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

import 'rxjs/add/operator/map';
import { User } from '../model/user';
import { AuthService } from "./auth-service";


@Injectable()
export class DataService{
    counter : number = 0;
    constructor(private http : Http, 
            private authService : AuthService,
            private httpClient : HttpClient){}

    getUserData(){
       //return USER_DATA;

       return this.httpClient.get("assets/data/user-data.json",{
        //    headers : new HttpHeaders().set("",""),
        //    params : new HttpParams().set("",""),
           observe : 'body',
           responseType : 'json'
       })
        .map(response=>{
            if(response["userdata"]){
                return <User[]>response["userdata"];
            }
        })
        
    //   return  this.http.get("assets/data/user-data.json")
    //     .map((response)=><User[]>response.json().userdata);
    // this.http.get("https://auth-proj-23826.firebaseio.com/userdata.json")
    // .map((response)=><User[]>response.json().userdata)
    // .subscribe((response)=>console.log(response));

    //return [];
    }
    getApiData(){

        this.httpClient.get<User[]>("https://auth-proj-23826.firebaseio.com/userdata.json")
            .map(response=>response)
            .subscribe(data=>console.log(data));

        // this.httpClient.get<User[]>("https://auth-proj-23826.firebaseio.com/userdata.json",
        //     {
        //         params : new HttpParams().set("auth", this.authService.getToken())
        //     })
        //     .map(response=>response)
        //     .subscribe(data=>console.log(data));
    
     this.http.get("https://auth-proj-23826.firebaseio.com/userdata.json?auth="+
                this.authService.getToken())
                .map(response=>response.json)
                .subscribe(data=>console.log(data),
                    (err)=>console.log(err));
    }
}