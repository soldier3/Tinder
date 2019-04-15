import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class AuthenticationService {

  AUTH_SERVER = "https://tindermoviebackend.herokuapp.com/";

  // private registerUrl = 'https://tindermoviebackend.herokuapp.com/auth/signup';
  // private loginUrl = 'https://tindermoviebackend.herokuapp.com/auth/signin';

  constructor(private httpClient: HttpClient) { }

  registerUser(user) {
    console.log('AuthService registerUser', user);
    return this.httpClient.post<any>(`${this.AUTH_SERVER}v1/auth/signup`, user);
  }

  loginUser(user) {
      console.log('AuthService loginUser', user);
      return this.httpClient.post<any>(`${this.AUTH_SERVER}v1/auth/signin`, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}




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

  // public get loggedIn(): boolean{
  //   return localStorage.getItem('access_token') !==  null;
  // }
