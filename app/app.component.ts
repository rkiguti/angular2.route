import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  template: `
    <ul>
      <li><a routerLink="">Home</a></li>
      <li><a [routerLink]="['photoDetails', 1]">Photo 1</a></li>
    </ul>
    <button (click)="onClick()">Photo 2</button>
    <router-outlet></router-outlet>
  `
})
export class AppComponent { 
    constructor(private _router: Router) {
    }

    onClick() {
      this._router.navigate(['photoDetails', 2]);
    }
}
