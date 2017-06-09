import { Router, RouterModule } from '@angular/router';

import { MessagesComponent } from './messages.component';

import { AuthGuard } from '../auth-guard.service';

export const messagesRouting = RouterModule.forChild([
    { 
        path: 'messages', 
        component: MessagesComponent,
        canActivate: [ AuthGuard ]
    }
]);