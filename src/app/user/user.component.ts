import { Component, 
    ViewEncapsulation, 
    Input, 
    Output, 
    EventEmitter, 
    OnInit, 
    OnChanges,
    SimpleChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import { User } from '../model/user';
import { DataService } from '../services/data.service';

@Component({
    selector : 'user-comp',
    //template : `` inline template
    templateUrl : `./user.component.html`,
    //styles : ''   inline style
    styleUrls : [`./user.component.css`],
    //encapsulation : ViewEncapsulation.Native,
    //changeDetection : ChangeDetectionStrategy.Default,
    providers : [DataService]
})
export class UserComponent implements 
    OnInit, 
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit, 
    AfterViewChecked,
    OnDestroy
    {
    @Input('xyz') users : User[];
    @Output('childEvent') childEvent = new EventEmitter<string>();

    borderStyle = "1px blue solid";
    condition : boolean = true;

    increment(){
        this.ds.counter++;
    }

    constructor(public ds : DataService){
       // console.log("constructor called!");
    }
    ngOnInit(){
        //console.log("ngOnInit called!");
    }
    ngOnChanges(changes : SimpleChanges){
       // console.log("ngOnChanges called!");
       // console.log(changes);
    }
    ngDoCheck(){
       // console.log("ngDoCheck called!");
    }
    ngAfterContentInit(){
        //console.log("ngAfterContentInit called!")
    }
    ngAfterContentChecked(){
       // console.log("ngAfterContentChecked called!")
    }
    ngAfterViewInit(){
        //console.log("ngAfterViewInit called!")
    }
    ngAfterViewChecked(){
        //console.log("ngAfterViewChecked called!")
    }
    ngOnDestroy(){
        //console.log("ngOnDestroy called!")
    }



    onKeyup(value : string){
        console.log(value);
        this.childEvent.emit(value);
    }

    moreInfo(user : User){
        alert(`${user.firstName} is working with ${user.company}!!`);
        this.condition = false;
    }
}

//npm install --save bootstrap@3