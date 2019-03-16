import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

import { User } from 'src/users';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent {

  user: User = {
    id: 123,
    login: 'userName',
    password: 'user123',
  };

  userForm: FormGroup;

  strongRegex = new RegExp("^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{6,})");

  ngOnInit() {
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
        Validators.pattern(this.strongRegex)
      ])),
    });
  }

  onSubmit() {
    if (this.userForm.invalid) {
      console.error('form invalid');
      return;
    }
  }
}

// userForm = new FormGroup({
//   login: new FormControl(''),
//   password: new FormControl(''),
// });
