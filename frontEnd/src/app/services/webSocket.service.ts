import * as io from 'socket.io-client';

import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class WebSocketService {
    private _socket: any;

    constructor() {
    }

    public connect(serverUrl: string) {
        this._socket = io(serverUrl);        
    }

    public getIncomingMessages() {
        return Observable.create((subject) => this._socket.on('message', (message) => 
            subject.next(message)
        ));
    }

}