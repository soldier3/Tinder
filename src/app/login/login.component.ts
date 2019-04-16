import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../auth/auth.service';
import { User } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  users: User[];
  userForm: FormGroup;

  loginUserData = {};

  constructor (
    private router: Router,
    private auth: AuthenticationService,
  ) { }

  ngOnInit() {

    this.userForm = new FormGroup({
     email: new FormControl('', Validators.compose([
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
    console.log('Вхідні дані:' + JSON.stringify(this.userForm.value))
  }

  loginUser() {
    console.log('LoginData: ', this.loginUserData);
    this.auth.loginUser(JSON.stringify(this.loginUserData))
        .subscribe(
            res => {
                console.log(res);
                localStorage.setItem('token', res.token);
                this.router.navigate(['v1/user']);
            },
            err => console.log(err)
        );
  }

  goToRegistration() {
    this.router.navigate(['v1/auth/signup']);
  }

}

