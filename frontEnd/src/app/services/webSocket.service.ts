import * as io from 'socket.io-client';

import { Injectable } from "@angular/core";
import { Observable, Subject, throwError } from 'rxjs';

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
        return Observable.create((subject: Subject<any>) => {
            this._socket.on('message', (message) => 
                subject.next(message)
            );

            this._socket.on('connect_error', (message) => {
                subject.error(message);
            });
        });
    }

}