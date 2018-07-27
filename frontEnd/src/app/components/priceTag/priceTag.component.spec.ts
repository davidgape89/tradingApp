import { PriceTagComponent } from "./priceTag.component";
import { CurrencyPair } from "../../models/CurrencyPair.interface";

describe('Price tag component', () => {
    let comp: PriceTagComponent,
        action: string,
        currency: string,
        price: number;

    beforeEach(() => {
        comp = new PriceTagComponent();
        action = 'Buy';
        currency = 'EUR';
        price = 0.99143;
        comp.action = action;
        comp.currency = currency;
        comp.price = price;
    });

    it('Should convert price to string correctly', () => {
        expect(comp.priceString).toEqual('0.99143');
    });

    it('Should calculate the price length correclty', () => {
        expect(comp.priceStringLength).toBe(7);
    });

    it('Should slice the first part of the price correctly', () => {
        expect(comp.priceFirstPart).toEqual('0.99');
    });

    it('Should slice the middle part of the price correctly', () => {
        expect(comp.priceMiddlePart).toEqual('14');
    });

    it('Should slice the last part of the price correctly', () => {
        expect(comp.priceLastPart).toEqual('3');
    });
});