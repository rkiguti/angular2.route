import { Router, RouterModule } from '@angular/router';

import { MessagesComponent } from './messages.component';

import { AuthGuard } from '../shared/auth-guard.service';
import { PreventUnsavedChangesGuard } from '../shared/prevent-unsaved-changes-guard.service';

export const messagesRouting = RouterModule.forChild([
    { 
        path: 'messages', 
        component: MessagesComponent,
        canActivate: [ AuthGuard ],
        canDeactivate: [ PreventUnsavedChangesGuard ]
    }
]);