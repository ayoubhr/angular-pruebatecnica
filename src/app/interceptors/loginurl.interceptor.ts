import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class LoginurlInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    if (!request.url.includes('api/login/')) {
      const reqClone = request.clone({ url: `${environment.loginUrl}/${request.url}` });
      return next.handle(reqClone);
    } else {
      return next.handle(request);
    }
  }
}
