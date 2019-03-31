import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

import { tap } from  'rxjs/operators';
// import { Observable, BehaviorSubject } from  'rxjs';

// import { User } from '../users';
// import { JwtResponse } from '../jwt-response';

// const httpOptions = {
//   headers: new HttpHeaders({
//     'Content-Type':  'application/json',
//     'Authorization': 'my-auth-token'
//   })
// };

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  // AUTH_SERVER = "https://tindermoviebackend.herokuapp.com/";

  // private registerUrl = 'https://tindermoviebackend.herokuapp.com/auth/signup';
  // private loginUrl = 'https://tindermoviebackend.herokuapp.com/auth/signin';

  constructor(private httpClient: HttpClient) { }

  // login(email: string, password: string) {
  //   return this.httpClient.post<{access_token: string}>(`${this.loginUrl}`, {email, password}, httpOptions).pipe(
  //     tap(res => {
  //         localStorage.setItem('access_token', res.access_token);
  //   }))
  // }

  // register(username: string, password:string, email:string, phone: string) {
  //   return this.httpClient.post<{access_token: string}>(`${this.registerUrl}`, {username, password, email, phone}, httpOptions)
    // .pipe(tap(res => {
    //       this.login(email, password)
    // }))
  // }

  // logout() {
  //   localStorage.removeItem('access_token');
  // }

  // public get loggedIn(): boolean{
  //   return localStorage.getItem('access_token') !==  null;
  // }
}
