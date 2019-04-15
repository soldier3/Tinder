import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthenticationService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(
      private authService: AuthenticationService,
      private router: Router) { }

    canActivate() {
        if (this.authService.loggedIn()) {
            return true;
        } else {
          this.router.navigate(['v1/auth/signin']);
          return false;
        }
    }
}
