import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { User } from './users';

@Injectable({
  providedIn: 'root'
})

export class BackendService implements InMemoryDbService {

  constructor() { }

  createDb(){

    const  users =  [
      {  id:  123, first_name: 'user123', last_name: 'user123', login:  'user123', password: 'user123' },
      {  id:  124, first_name: 'user124', last_name: 'user124', login:  'user124', password: 'user124' },
    ];

    return {users};
  }

  genId(users: User[]): number {
    return users.length > 0 ? Math.max(...users.map(user => user.id)) + 1 : 123;
  }
}
