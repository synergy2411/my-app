import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeComponent } from './employee/employee.component';
import {RouterModule } from '@angular/router';
import { EMP_ROUTES } from './employee.routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(EMP_ROUTES)
  ],
  declarations: [EmployeeComponent]
})
export class EmployeeModule { }
