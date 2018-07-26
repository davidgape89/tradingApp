import * as ioSocketClient from 'socket.io-client';

import { WebSocketService } from './webSocket.service';
import { Injectable } from "@angular/core";
import { CurrencyPair } from '../models/CurrencyPair.interface';
import { Observable } from 'rxjs';

const serverUrl: string = 'http://localhost:3000';

@Injectable({
    providedIn: 'root',
})
export class CurrenciesService {

    constructor(private _socketService: WebSocketService<CurrencyPair[]>) {
        this._socketService.connect(serverUrl);
    }

    public getCurrencies(): Observable<CurrencyPair[]> {
        return this._socketService.incomingMessages$;
    }
}