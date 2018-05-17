import { Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name : 'myfilter',
    pure : false
})
export class MyFilterPipe implements PipeTransform{
    transform(value : any, filterStatus : string, prop : string){
        if(value.length == 0 || filterStatus == ""){
            return value;
        }
        let resultArray = [];
        for(let item of value){
            if(item[prop]==filterStatus)
                resultArray.push(item);
        }
        return resultArray;
    }
}