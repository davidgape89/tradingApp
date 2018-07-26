import {Component, OnInit} from '@angular/core';
import {WebSocketService} from '../services/webSocket.service';

@Component({
    selector: 'currency-panel',
    templateUrl: './currencyPanel.component.html',
    styleUrls: ['./currencyPanel.component.scss']
})
export class CurrencyPanelComponent implements OnInit {

    constructor(private webSocketService: WebSocketService) { 

    }

    ngOnInit() {
        console.log('This is onInit');
    }

}