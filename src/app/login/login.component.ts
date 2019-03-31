import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, NgForm } from '@angular/forms';
// import { Router } from '@angular/router';

// import { AuthenticationService } from '../auth/auth.service';
import { User } from '../users';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  users: User[];
  userForm: FormGroup;

  constructor (
    // private router: Router,
    // private authService: AuthenticationService,
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
  }

}

