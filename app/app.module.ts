import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }   from './app.component';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';

import { HomeComponent } from './home.component';
import { PhotoDetailsComponent } from './photo-details.component';
import { NotFoundComponent } from './not-found.component';

@NgModule({
  imports:      [ BrowserModule, HttpModule, routing ],
  declarations: [ AppComponent, HomeComponent, PhotoDetailsComponent, NotFoundComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }