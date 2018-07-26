import {Component, OnInit} from '@angular/core';
import { CurrenciesService } from '../services/currencies.service';
import { CurrencyPair } from '../models/CurrencyPair.interface';

@Component({
    selector: 'currency-panel',
    templateUrl: './currencyPanel.component.html',
    styleUrls: ['./currencyPanel.component.scss']
})
export class CurrencyPanelComponent implements OnInit {
    public currencies: CurrencyPair[];

    constructor(private _currenciesService: CurrenciesService) { 
    }

    ngOnInit() {
        this._currenciesService.getCurrencies().subscribe(
            (currencies) => this._onNewCurrencyMessage(currencies)
        );
    }

    private _onNewCurrencyMessage(currencies: CurrencyPair[]) {
        this.currencies = currencies;
    }

}