import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { FormComponent } from '../shared/form-component.interface';
import { MessagesService } from './messages.service';

@Component({
    template: `
        <h1>Messages</h1>
        <form [formGroup]="messagesForm">
            <input type="text" formControlName="title">
        </form>
        <ul>
            <li *ngFor="let m of messages">{{ m }}</li>
            <li>Message 2</li>
        </ul>
    `,
    providers: [ MessagesService ]
})
export class MessagesComponent implements FormComponent, OnInit {
    messages;
    messagesForm: FormGroup;

    constructor(private _service: MessagesService, fb: FormBuilder) {
        this.messagesForm = fb.group({
            title: ['']
        });
    }

    ngOnInit() {
        this.messages = this._service.getMessages();
    }

    hasUnsavedChanges() {
        return this.messagesForm.dirty;
    }
}