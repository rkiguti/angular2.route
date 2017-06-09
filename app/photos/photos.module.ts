import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { photosRouting } from './photos.routing';

import { PhotosComponent } from './photos.component';
import { PhotoDetailsComponent } from './photo-details.component';

@NgModule({
  imports:      [ BrowserModule, photosRouting ],
  declarations: [ PhotosComponent, PhotoDetailsComponent ],
})
export class PhotosModule { }