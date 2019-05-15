import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './user/profile/profile.component';
import { MessagesComponent } from './user/messages/messages.component';
import { FilmsComponent } from './user/films/films.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTabsModule, MatSelectModule, MatInputModule, MatButtonModule, MatRadioModule } from '@angular/material';

import { CookieService } from 'ngx-cookie-service';
import { TokenInterceptor } from './model/token-interceptor';
import { ShareService } from './service/share.service';

// import { RouterModule, Routes } from '@angular/router';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent,
    ProfileComponent,
    MessagesComponent,
    FilmsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    MatTabsModule,
    MatSelectModule,
    MatInputModule,
    MatButtonModule,
    MatRadioModule,
    BrowserAnimationsModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    },
      CookieService,
      ShareService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
