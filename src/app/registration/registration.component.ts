import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm, FormBuilder } from '@angular/forms';
// import { Router } from '@angular/router';
// import { first } from 'rxjs/operators';

import { User } from '../users';
// import { UsersService } from '../user/users.service';
// import { AuthenticationService } from '../auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  users: User[];
  registrationForm: FormGroup;
  // loading = false;
  // submitted = false;

  passwordRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");
  phoneRegex = new RegExp("^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$")

  constructor (
    private formbilder: FormBuilder,
    // private router: Router,
    // private authService: AuthenticationService,
    ) { }

  ngOnInit() {

    this.registrationForm = this.formbilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
      ])),

      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.pattern(this.passwordRegex)
      ])),

      email: new FormControl ('', Validators.compose([
        Validators.required,
        Validators.email
      ])),

      phone: new FormControl ('', Validators.compose([
        Validators.required,
        Validators.pattern(this.phoneRegex)
      ])),
    });
  }

  onSubmit() {
    if (this.registrationForm.invalid) {
      return;
    }
  }
}
