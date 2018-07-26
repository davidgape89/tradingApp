import * as ioSocketClient from 'socket.io-client';

import { Injectable } from "@angular/core";

const serverUrl: string = 'localhost:3000';

@Injectable({
    providedIn: 'root',
})
export class WebSocketService {
    private _socket: ioSocketClient.Socket;

    constructor() {}

    public connect(serverUrl: string) {
        this._socket = ioSocketClient.connect(serverUrl);
    }
}