import { Component, OnInit } from '@angular/core';
import { User } from 'src/users';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  user: User = {
    id: 123,
    login: 'userName',
    password: 'user123',
  };

  // condition: boolean = false;

  // logIn() {
  //   this.condition = !this.condition;
  // }

  constructor() { }

  ngOnInit() {
  }

}
