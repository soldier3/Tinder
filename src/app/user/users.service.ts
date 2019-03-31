import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../users';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UsersService {

  private usersUrl = 'api/users';

  constructor( private http: HttpClient) { }

  register(user: User) {
    return this.http.post(`/auth/signup`, user);
  }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  getUser(id: number): Observable<User> {
    return this.http.get<User>(`${this.usersUrl}/${id}`);
  }

  addUser(user: User): Observable<User> {
    return this.http.post<User>(this.usersUrl, user, httpOptions);
  }
}
