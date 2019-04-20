import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { CITIES } from '../user/films/list-city';
import { AuthenticationService } from '../auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  registrationForm: FormGroup;

  cityList: Array<any> = CITIES;

  genders = [
    {gender: 'male', genderName: 'Чоловіча'},
    {gender: 'female', genderName: 'Жіноча'}
  ];

  passwordRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  phoneRegex = new RegExp("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$")

  constructor (
    private formbilder: FormBuilder,
    private router: Router,
    private auth: AuthenticationService,
  ) { }


  ngOnInit() {

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

  onSubmit(){
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

  cancel() {
    this.router.navigate(['v1/auth/signin']);
  }
}
