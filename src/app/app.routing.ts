import { Routes } from '@angular/router';
import { UserComponent } from './user/user.component';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { SigninComponent } from './signin/signin.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { ProductComponent } from './product/product.component';

export const APP_ROUTES : Routes = [{
    path : '',
    redirectTo : 'product',
    pathMatch : 'full'
},{
    path : "product",
    component : ProductComponent
},{
    path : "observable",
    component : ObservableDemoComponent
},{
    path : "login",
    component : SigninComponent
},{
    path : 'pipe',
    component : PipeDemoComponent
},{
    path : "**",
    redirectTo : "product",
    pathMatch : 'full'
}]