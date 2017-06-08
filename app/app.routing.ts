import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { PhotoDetailsComponent } from './photo-details.component';
import { NotFoundComponent } from './not-found.component';

export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { path: 'photoDetails/:id', component: PhotoDetailsComponent },
    { path: '**', component: NotFoundComponent }
]);