import { Observable } from 'rxjs';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let newRequest = request.clone({
      headers: request.headers.set('auth-token', 'Bonjour')
    })

    return next.handle(newRequest)
  }

}