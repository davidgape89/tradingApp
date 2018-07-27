import {Component, Input, OnChanges} from '@angular/core';
import { CurrenciesService } from '../../services/currencies.service';
import { CurrencyPair } from '../../models/CurrencyPair.interface';

@Component({
    selector: 'currency-panel',
    templateUrl: './currencyPanel.component.html',
    styleUrls: ['./currencyPanel.component.scss']
})
export class CurrencyPanelComponent implements OnChanges {
    @Input() currency: CurrencyPair;

    public isTendencyUpwards: boolean = false;
    public isTendencyDownwards: boolean = false;

    get priceCurrency(): string {return this.currency.pair.split(' ')[0]}

    constructor() {

    }

    ngOnChanges(changes) {
        if(!changes.currency.previousValue || !changes.currency.currentValue)
            return;
        console.log(changes);
        const prev = changes.currency.previousValue,
            current = changes.currency.currentValue;

        if(prev.buy === current.buy) {
            this.isTendencyUpwards = false;
            this.isTendencyDownwards = false;
        } else {
            if(prev.buy > current.buy) {
                this.isTendencyDownwards = true;
                this.isTendencyUpwards = false;
            } else {
                this.isTendencyDownwards = false;
                this.isTendencyUpwards = true;
            }
        }
    }

}