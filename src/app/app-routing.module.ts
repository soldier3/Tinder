import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component'
import { UserComponent } from './user/user.component';
// import { AuthGuard } from './auth/auth.guard'

const routes: Routes = [
  // { path: '', redirectTo: '/auth', pathMatch: 'full'},
  { path: '', component: HomeComponent,  //  canActivate: [AuthGuard],
    children: [ { path: 'auth/signin', component: LoginComponent },
                { path: 'auth/signup', component: RegistrationComponent } ]
  },
  { path: 'user', component: UserComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
