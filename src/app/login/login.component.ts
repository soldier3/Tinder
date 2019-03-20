import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

import { User } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  users: User[];
  userForm: FormGroup;

  constructor () { }

  ngOnInit() {

    this.userForm = new FormGroup({
     login: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
  }
}

