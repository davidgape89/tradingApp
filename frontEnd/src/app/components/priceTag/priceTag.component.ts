import {Component, OnInit, Input} from '@angular/core';

@Component({
    selector: 'price-tag',
    templateUrl: './priceTag.component.html',
    styleUrls: ['./priceTag.component.scss']
})
export class PriceTagComponent implements OnInit {
    @Input() price: number;
    @Input() currency: string;
    @Input() action: string;

    get priceString(): string {return this.price.toFixed(4)}

    constructor() { 
    }

    ngOnInit() {
    
    }

}