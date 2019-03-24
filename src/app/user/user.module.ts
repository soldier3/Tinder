import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { UserRoutingModule } from './user-routing.module';

import { UserComponent } from './user.component';
import { FilmsComponent } from './films/films.component';
import { MessagesComponent } from './messages/messages.component';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    UserComponent,
    FilmsComponent,
    MessagesComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    UserRoutingModule,
  ],
  providers: [],
  bootstrap: [UserComponent]
})
export class UserModule { }
