import { fakeAsync, async } from '@angular/core/testing';
import { CurrenciesService } from "./currencies.service";
import { Observable } from 'rxjs';
import { AsyncResource } from "async_hooks";


describe('Currencies service', () => {
    let service: CurrenciesService,
        spy: any,
        receivedMessage: any,
        stream: Observable<any>,
        mockMessage: any;
    
    beforeEach(() => {
        mockMessage = {
            currencies: [
                {"pair":"USD CHF", "buy":0.99143, "sell":0.99043},
                {"pair":"GBP USD", "buy":1.28495, "sell":1.2836}
            ]
        };
        stream = Observable.create((subject) => 
            subject.next(mockMessage)
        );
        spy = jasmine.createSpyObj('MockSocket', {connect: undefined, getIncomingMessages: stream});

        service = new CurrenciesService(spy);
    });

    it('should instantiate correctly', () => {
        expect(service).toBeDefined();
    });

    describe('connection', () => {
        it('should try to connect to the right url', () => {
            expect(spy.connect.calls.argsFor(0)).toEqual(['http://localhost:3000']);
        });

        it('should try to call connect in socket', () => {
            expect(spy.connect.calls.count()).toBe(1);
        });
    })

    describe('incoming messages', () => {
        beforeEach(async(() => {
            service.getCurrencies().subscribe((message) => 
                receivedMessage = message
            );
        }));

        it('should call getIncomingMessages', () => {
            expect(spy.getIncomingMessages.calls.count()).toBe(1);
        });

        it('should map the right information', () => {
            expect(receivedMessage.length).toBe(2);
        });
    })
    
})