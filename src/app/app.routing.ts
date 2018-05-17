import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { SigninComponent } from './signin/signin.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ProductComponent } from './product/product.component';
import { OverviewComponent } from './product/overview/overview.component';
import { SpecComponent } from './product/spec/spec.component';
import { LoginGaurd } from './services/login-gaurd-service';
import { CustomerComponent } from './customer/customer.component';

export const APP_ROUTES : Routes = [{
    path : '',
    redirectTo : 'product',
    pathMatch : 'full'
},{
    path : "product",
    component : ProductComponent,
    children : [
        {
            path : "overview/:id/:name",
            component : OverviewComponent
        },{
            path : "spec",
            component : SpecComponent
        }
    ]
},{
    path : "observable",
    component : ObservableDemoComponent
},{
    path : "login",
    component : SigninComponent
},{
    path : "logout",
    redirectTo : 'product',
    pathMatch : 'full'
},{
    path : 'pipe',
    component : PipeDemoComponent,
    canActivate : [LoginGaurd]
},{
    path : "customer",
    component : CustomerComponent
},{
    path : 'employee',
    loadChildren : "app/employee/employee.module#EmployeeModule"
},{
    path : "**",
    redirectTo : "product",
    pathMatch : 'full'
}]