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

  constructor( private http: HttpClient) { }

  getAll() {
    return this.http.get<User[]>('user');
  }

  create(user: User) {
    return this.http.post('/user', user, httpOptions);
  }
}
