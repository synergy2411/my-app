import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { HighlightDirective } from './directives/highlight.directive';
import { UnlessDirective } from './directives/unless.directive';
import { CountryCodePipe } from './pipes/countrycode.pipe';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { MyFilterPipe } from './pipes/filter.pipe';
import { UserCommentComponent } from './user/user-comment/user-comment.component';
import { SigninComponent } from './signin/signin.component';
import { DataService } from './services/data.service';
import { ObservableDemoComponent } from './observable-demo/observable-demo.component';
import { AuthService } from './services/auth-service';
import { AuthInterceptor } from './services/auth-interceptor';
import { LoggerInterceptor } from './services/logger-interceptor';

@NgModule({
  declarations: [           //Component, Pipes , Directives
    AppComponent,
    UserComponent,
    HighlightDirective,
    UnlessDirective,
    CountryCodePipe,
    PipeDemoComponent,
    MyFilterPipe,
    UserCommentComponent,
    SigninComponent,
    ObservableDemoComponent,
  ],
  imports: [                //All modules : built-in & Custom
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule
  ],
  providers: [ DataService, 
              AuthService,
              {
                provide : HTTP_INTERCEPTORS,
                useClass : AuthInterceptor,
                multi : true
              },{
                provide : HTTP_INTERCEPTORS,
                useClass :  LoggerInterceptor,
                multi : true
              }],            // Register the Services
  bootstrap: [AppComponent]
})
export class AppModule { }
