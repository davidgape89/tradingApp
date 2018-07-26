import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { WebSocketService } from './services/webSocket.service';
import { AppComponent } from './app.component';
import { CurrencyPanelComponent } from './components/currencyPanel.component';
import { CurrenciesService } from './services/currencies.service';

@NgModule({
  declarations: [
    AppComponent,
    CurrencyPanelComponent
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
