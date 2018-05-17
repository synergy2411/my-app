import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name : 'countrycode'
})
export class CountryCodePipe implements PipeTransform{
    transform(value : any, ...args : any[]){
        console.log(args);
        return "+" + args[0]+ "-" + value;
    }   
}