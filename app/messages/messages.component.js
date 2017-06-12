"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular/core");
const forms_1 = require("@angular/forms");
const messages_service_1 = require("./messages.service");
let MessagesComponent = class MessagesComponent {
    constructor(_service, fb) {
        this._service = _service;
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
};
MessagesComponent = __decorate([
    core_1.Component({
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
        providers: [messages_service_1.MessagesService]
    }),
    __metadata("design:paramtypes", [messages_service_1.MessagesService, forms_1.FormBuilder])
], MessagesComponent);
exports.MessagesComponent = MessagesComponent;
//# sourceMappingURL=messages.component.js.map