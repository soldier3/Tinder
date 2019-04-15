import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

import { User } from '../users';
import { CITIES } from '../user/films/list-city';
import { AuthenticationService } from '../auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  users: User[];
  registrationForm: FormGroup;

  private user: User;
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

    this.user = new User({
      username: "", city: this.cityList[0], email: "", phone: "",
      gender: this.genders[0], age: "", password: "",});

  }

  onSubmit(){
    if (this.registrationForm.invalid) {
      return;
    }
    console.log('Реєстраційні дані:' + JSON.stringify(this.registrationForm.value))
  }

  registerUser() {
    console.log('RegisterData: ', this.user);
    this.auth.registerUser(this.user)
        .subscribe(
            result => {
                console.log('result is:');
                console.log(result.token);
                localStorage.setItem('token', result.token);
                this.router.navigate(['v1/auth/signin']);
            },
            err => console.log(err)
        );
  }

  cancel() {
    this.router.navigate(['v1/auth/signin']);
  }
}
