import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

import { User } from '../users';
// import { BackendService } from '../backend.service';
// import { UsersService } from '../user/users.service';
// import { AuthService} from '../auth/auth.service';


@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent implements OnInit {

  users: User[];
  userForm: FormGroup;
  passwordRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

  constructor () { } //private usersService: UsersService

  // getUsers(): void {
  //   this.usersService.getUsers()
  //     .subscribe(users => this.users = users);
  // }

  ngOnInit() {
    // this.getUsers();

    this.userForm = new FormGroup({
     login: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(20),
        Validators.pattern(this.passwordRegex)
      ])),
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
  }

  // addUser(login: string, password: string): void {
  //   login = login.trim();
  //   password = password.trim();
  //   if (!login && !password) { return; }
  //   this.usersService.addUser({ login, password } as User)
  //     .subscribe(user => {
  //       this.users.push(user);
  //     });
  // }
}

