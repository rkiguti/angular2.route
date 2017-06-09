import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';

import { MessagesModule } from './messages/messages.module';
import { PhotosModule } from './photos/photos.module';

import { routing } from './app.routing';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, MessagesModule, PhotosModule, routing ],
  declarations: [ AppComponent, HomeComponent, NotFoundComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ AuthService, AuthGuard ]
})
export class AppModule { }