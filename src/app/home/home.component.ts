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
    name: 'userName',
    surname: 'userSurname',
    old: 20,
    email: 'user1@gmail.com',
    password: 'user123',
  };

  constructor() { }

  ngOnInit() {
  }

}
