import * as io from 'socket.io-client';

import { Injectable } from "@angular/core";
import { Observable, Subject } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class WebSocketService<T> {
    public incomingMessages$: Observable<T>;
    private _socket: io.Socket;

    constructor() {
        this.incomingMessages$ = new Subject<T>();
    }

    public connect(serverUrl: string) {
        this._socket = io(serverUrl);

        this.incomingMessages$ = Observable.create(
            (subject) => this._socket.on('message', (message) => {
                subject.next(message)
        }));
        
    }

}