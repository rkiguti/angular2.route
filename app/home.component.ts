import { Component } from '@angular/core';
import { AuthService } from './auth.service';

@Component({
    template: `<h1>Home</h1>`
})
export class HomeComponent {
    constructor(private _authService: AuthService) {
        this._authService.login("a", "a");
    }
}