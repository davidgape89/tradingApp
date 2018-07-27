import { Component, OnInit } from '@angular/core';
import { CurrenciesService } from './services/currencies.service';
import { CurrencyPair } from './models/CurrencyPair.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public currencies: CurrencyPair[];

  constructor(private _currenciesService: CurrenciesService) {

  }

  ngOnInit() {
      this._currenciesService.getCurrencies().subscribe(
          (currencies) => this._onNewCurrencyMessage(currencies)
      );
  }

  public trackByFn(index, item) {
    return index;
  }

  private _onNewCurrencyMessage(currencies: CurrencyPair[]) {
      this.currencies = currencies;
  }
  
}
