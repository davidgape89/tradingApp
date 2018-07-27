import { CurrencyPanelComponent } from "./currencyPanel.component";
import { CurrencyPair } from "../../models/CurrencyPair.interface";

describe('Currency panel component', () => {
    let comp: CurrencyPanelComponent,
        mockCurrency: CurrencyPair;

    beforeEach(() => {
        comp = new CurrencyPanelComponent();
        mockCurrency = {
            "pair":"USD CHF", 
            "buy":0.99143, 
            "sell":0.99043
        };
        comp.currency = mockCurrency;
    });

    it('Should extract price currency correctly', () => {
        expect(comp.priceCurrency).toEqual('USD');
    });

    it('Tendencies should be both false when initialised', () => {
        expect(comp.isTendencyDownwards).toBeFalsy();
        expect(comp.isTendencyUpwards).toBeFalsy();
    });

    describe('tendency update', () => {
        let changes,
            upwardMock,
            downwardMock;

        beforeEach(() => {
            changes = {
                currency: {
                    previousValue: mockCurrency,
                    currentValue: mockCurrency
                }
            };
        });

        it('shows stable tendency correctly', () => {
            comp.ngOnChanges(changes);
            expect(comp.isTendencyUpwards).toBeFalsy();
            expect(comp.isTendencyDownwards).toBeFalsy();
        });

        it('shows upwards tendency correctly', () => {
            changes.currency.currentValue = {
                "pair":"USD CHF", 
                "buy":0.99150, 
                "sell":0.99050
            };
            comp.ngOnChanges(changes);
            expect(comp.isTendencyUpwards).toBeTruthy();
            expect(comp.isTendencyDownwards).toBeFalsy();
        });

        it('shows upwards tendency correctly', () => {
            changes.currency.currentValue = {
                "pair":"USD CHF", 
                "buy":0.99140, 
                "sell":0.99040
            };
            comp.ngOnChanges(changes);
            expect(comp.isTendencyUpwards).toBeFalsy();
            expect(comp.isTendencyDownwards).toBeTruthy();
        });
    });
});