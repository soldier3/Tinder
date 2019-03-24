import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

// import { FilmsComponent } from './films/films.component';
// import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';

const userRoutes: Routes = [

  // { path: 'films', component: FilmsComponent },
  // { path: 'messages', component: MessagesComponent },
  { path: 'profile', component: ProfileComponent }
]

@NgModule({
  imports: [ CommonModule, RouterModule.forChild(userRoutes) ],
  exports: [ RouterModule ]
})

export class UserRoutingModule { }
