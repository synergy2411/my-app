import { Injectable } from "@angular/core";
import * as firebase from 'firebase';

@Injectable()
export class AuthService{

signup(username, password){
firebase.auth()
    .createUserWithEmailAndPassword(username, password)
    .then((response)=>console.log(response))
    .catch((err)=>console.log(err));
}

signin(username, password){
firebase.auth().signInWithEmailAndPassword(username, password)
    .then(response=>{
        firebase.auth()
            .currentUser.getIdToken()
            .then(token => {
                this.token = token;
                console.log(token);
            });
        console.log(response)})
    .catch(err=>console.log(err));
}

token : string;

getToken(){
firebase.auth().currentUser.getIdToken()
    .then(token=>{
        this.token = token;
        console.log(token);
    })
return this.token;
}

    isAuthenticated(){
        return this.token != null;
    }

    signout(){
        firebase.auth().signOut();
        this.token = null;
    }
}