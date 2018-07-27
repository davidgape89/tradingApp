import * as ioSocketClient from 'socket.io-client';

import { WebSocketService } from './webSocket.service';
import { Injectable } from "@angular/core";
import { CurrencyPair } from '../models/CurrencyPair.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const serverUrl: string = 'http://localhost:3000';

@Injectable({
    providedIn: 'root',
})
export class CurrenciesService {

    constructor(private _socketService: WebSocketService) {
        this._socketService.connect(serverUrl);
    }

    public getCurrencies(): Observable<CurrencyPair[]> {
        return this._socketService.getIncomingMessages().pipe(map((message: any) => 
            message.currencies
        ));
    }
}