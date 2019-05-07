import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { AuthenticationService } from '../auth/auth.service';
import { CITIES } from '../user/films/list-city';
import { User } from '../model/user';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  registrationForm: FormGroup;
  cityList: Array<any> = CITIES;

  genders = [
    {gender: 'male', genderName: 'Чоловіча'},
    {gender: 'female', genderName: 'Жіноча'}
  ];

  passwordRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  phoneRegex = new RegExp("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$");

  constructor (
    private formbilder: FormBuilder,
    private router: Router,
    private auth: AuthenticationService,
    private cookieService: CookieService
  ) { }

  submitRegistration(){
    if (this.registrationForm.invalid) {
      return;
    }
  }

  registerUser() {
    console.log('Реєстраційні дані:' + JSON.stringify(this.registrationForm.value))
    this.auth.registerUser(this.registrationForm.value)
        .subscribe(
          data => {
            console.log('data', data);
            localStorage.setItem('token', data.token);
            console.log(data.token);
            this.router.navigate(['v1/auth/signin']);
          },
            error => console.log(error)
        );
  }

  ngOnInit() {

    this.loginForm = this.formbilder.group({
     email: new FormControl('', Validators.compose([
        Validators.required
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required
      ])),
    });


    this.registrationForm = this.formbilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
      ])),

      city: ['', Validators.required],

      email: new FormControl ('', Validators.compose([
        Validators.required,
        Validators.email
      ])),

      phone: new FormControl ('', Validators.compose([
        Validators.required,
        Validators.pattern(this.phoneRegex)
      ])),

      gender: ['', Validators.required],

      age: ['', Validators.required],

      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(3),
        Validators.pattern(this.passwordRegex)
      ])),
    });

  }

  onSubmit() {
    if (this.loginForm.invalid) {
      return;
    }
  }

  loginUser() {
    let body = JSON.stringify(this.loginForm.value);
    this.auth.loginUser(body).subscribe((result: User) => {
      this.cookieService.set( 'Authorization', result.token );
    },
    error => {
      // error - объект ошибки
    });
  }

}



