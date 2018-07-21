import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class ReqInterceptorService implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    console.log('Server Request intercepted.');

    const newReq = req.clone({
      headers: req.headers.set('req-interceptor-hdr', 'abcd1234')
    });

    return next.handle(newReq);
  }
}
