import { NgModule } from '@angular/core';
import { CustomerComponent } from './customer.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations :  [ CustomerComponent],
    imports :       [ CommonModule ],
    exports    :    [ CustomerComponent ]
    //bootstrap : []
})
export class CustomerModule{}