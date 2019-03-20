import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';

import { User } from '../users';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  users: User[];
  userForm: FormGroup;
  passwordRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

  constructor () { }

  ngOnInit() {

    this.userForm = new FormGroup({
      first_name: new FormControl ('', Validators.compose([
        Validators.required
      ])),
      last_name: new FormControl ('', Validators.compose([
        Validators.required
      ])),
      login: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(this.passwordRegex)
      ])),
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      return;
    }
  }
}
