import { HttpInterceptor, 
    HttpRequest, 
    HttpHandler,
    HttpEvent } from "@angular/common/http";
import { Observable } from 'rxjs/Observable';
import { Injectable } from "@angular/core";
import { AuthService } from './auth-service';
import 'rxjs/add/operator/do';

@Injectable()
export class LoggerInterceptor implements HttpInterceptor{
    constructor(private authService : AuthService){}
    intercept(req : HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        console.log("Intercepted!", req);
        
        return next.handle(req)
            .do(response=>{
                console.log(response);
                return response;
            })
            
    }
}