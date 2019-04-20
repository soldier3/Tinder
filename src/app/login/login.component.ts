import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor (
    private formbilder: FormBuilder,
    private router: Router,
    private auth: AuthenticationService,
  ) { }

  ngOnInit() {

    this.loginForm = this.formbilder.group({
     email: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });
  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
  }

  loginUser() {
    console.log('Вхідні дані:' + JSON.stringify(this.loginForm.value))
    this.auth.loginUser(JSON.stringify(this.loginForm.value))
        .subscribe(
            data => {
                console.log(data);
                console.log(data.token);
                localStorage.setItem('token', data.token);
                // this.router.navigate(['v1/user']);
            },
            err => console.log(err)
        );
  }

  goToRegistration() {
    this.router.navigate(['v1/auth/signup']);
  }

}

