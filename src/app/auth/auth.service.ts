import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded',
    'Authorization': 'my-auth-token'
  })
};

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
    const body = JSON.stringify(user);
    console.log('body=', body);
    return this.httpClient.post<any>(`${this.AUTH_SERVER}v1/auth/signup`, body, httpOptions);
  }

  loginUser(user) {
      console.log('AuthService loginUser', user);
      const body = user;
      console.log('body=', body);
      return this.httpClient.post<any>(`${this.AUTH_SERVER}v1/auth/signin`, body, httpOptions);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }
}
