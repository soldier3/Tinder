import {EventEmitter, Injectable} from '@angular/core';
import { User } from '../users';

@Injectable({
  providedIn: 'root'
})

export class ShareService {
  private user;
  emitUser: EventEmitter<User> = new EventEmitter();

  constructor() { }

  public getUser() {
    this.emitUser.emit(this.user);
  }

  public setUser(obj) {
    this.user = obj;
  }
}
