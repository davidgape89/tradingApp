import {Component, Input} from '@angular/core';

@Component({
    selector: 'price-tag',
    templateUrl: './priceTag.component.html',
    styleUrls: ['./priceTag.component.scss']
})
export class PriceTagComponent {
    @Input() price: number;
    @Input() currency: string;
    @Input() action: string;

    get priceString(): string {return this.price.toFixed(5).toString()}
    get priceStringLength(): number {return this.priceString.length};

    get priceFirstPart(): string {
        return this.priceString.substring(0, this.priceStringLength-3)
    }
    get priceMiddlePart(): string {
        return this.priceString.substring(this.priceStringLength-3, this.priceStringLength-1)
    }
    get priceLastPart(): string {
        return this.priceString.substring(this.priceStringLength-1, this.priceStringLength)
    }

    constructor() { 
    }


}