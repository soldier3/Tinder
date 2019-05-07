import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service'

import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(private cookieService: CookieService){}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //const token = this.cookieService.get('Authorization');
    // const authReq = req.clone({ setHeaders: { 'Authorization' : token } });
    const authReq = req.clone({ setHeaders: { 'Content-Type': 'application/json' } });
    // send cloned request with header to the next handler.
    return next.handle(authReq);

  }
}
