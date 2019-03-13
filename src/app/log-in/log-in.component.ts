import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { User } from 'src/users';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})

export class LogInComponent {

  loginForm = new FormGroup({
    login: new FormControl(''),
    password: new FormControl(''),
  });

}
