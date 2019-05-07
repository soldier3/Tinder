import { Component, OnInit } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { Router } from "@angular/router"

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {

  cookieValue = 'UNKNOWN';

  constructor( private cookieService: CookieService,
               private router: Router ) { }

  ngOnInit() {
    // this.cookieService.set( 'user-token', 'Hello World' );
    // this.cookieValue = this.cookieService.get('user-token');
    this.route();
  }

  route() {
    let cookieExists: boolean = this.cookieService.check('Authorization');

    if (cookieExists) {
      this.router.navigateByUrl('user/');
      // .then(e => {
      //   if (e) {
      //     console.log("Navigation is successful!");
      //   } else {
      //     console.log("Navigation has failed!");
      //   });
      // }
    } else {
      this.router.navigateByUrl('signup');
      // .then(e => {
      //   if (e) {
      //     console.log("Navigation is successful!");
      //   } else {
      //     console.log("Navigation has failed!");
      //   }
      // }
    }
  }
}
