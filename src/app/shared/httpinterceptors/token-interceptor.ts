import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Injectable} from '@angular/core'
import { Observable } from 'rxjs';
import {SampleService} from '../services/sample.service';



@Injectable({
  providedIn:'root'
})


export class TokenInterceptor implements HttpInterceptor{

 
  constructor(private _http:SampleService) {}
   
  intercept(req,next){
    let inject = this._http.getToken()
    let tokenizedReq = req.clone({
      setHeaders:{
        Authorization:`Bearer ${inject}`
      }
    })
    return next.handle(tokenizedReq)
  
  }
  
}