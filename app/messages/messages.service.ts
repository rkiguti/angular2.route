import { Injectable } from '@angular/core';

@Injectable()
export class MessagesService {
    getMessages() {
        return [ "Message 1", "Message 2" ];
    }
}