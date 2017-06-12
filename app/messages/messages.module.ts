import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { messagesRouting } from './messages.routing';

import { AuthGuard } from '../shared/auth-guard.service';
import { MessagesComponent } from './messages.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule,  messagesRouting ],
  declarations: [ MessagesComponent ],
  providers:    [ AuthGuard ]
})
export class MessagesModule { }