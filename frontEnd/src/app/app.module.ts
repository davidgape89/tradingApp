import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WebSocketService } from './services/webSocket.service';
import { AppComponent } from './app.component';
import { CurrencyPanelComponent } from './components/currencyPanel/currencyPanel.component';
import { CurrenciesService } from './services/currencies.service';
import { PriceTagComponent } from './components/priceTag/priceTag.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyPanelComponent,
    PriceTagComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    WebSocketService,
    CurrenciesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
