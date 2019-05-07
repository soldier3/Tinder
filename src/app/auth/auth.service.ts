import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';

import { catchError, retry } from 'rxjs/operators';
import { throwError } from 'rxjs';

const httpOptions = {
  // headers: new HttpHeaders({
  //   'Content-Type': 'application/json',
  // })
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

  loginUser(body) {
      return this.httpClient.post(`${this.AUTH_SERVER}v1/auth/signin`, body, httpOptions)
      .pipe(
        retry(3), // retry a failed request up to 3 times
        catchError(this.handleError) // then handle the error
      );
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }



  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  };

}
