import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { messagesRouting } from './messages.routing';

import { AuthGuard } from '../auth-guard.service';
import { MessagesComponent } from './messages.component';

@NgModule({
  imports:      [ BrowserModule, messagesRouting ],
  declarations: [ MessagesComponent ],
  providers:    [ AuthGuard ]
})
export class MessagesModule { }