import { BerlinClock } from '../src/app.js';

describe("A suite of tests for the function setSingleMinutes", function() {
    it('should return default value of the clock', () => {
        let clock = new BerlinClock();
        console.log(clock.getSingleMinutes());
        expect(clock.getSingleMinutes()).toBe('OOOO');
    });

    it('should return 4 yellow lights for 4 minutes', () => {
        const date = new Date();
        date.setMinutes(4);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateSingleMinutes();

        console.log(clock.getSingleMinutes());
        expect(clock.getSingleMinutes()).toBe('YYYY');
    });

    it('should return 3 yellow lights for 3 minutes', () => {
        const date = new Date();
        date.setMinutes(3);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateSingleMinutes();

        console.log(clock.getSingleMinutes());
        expect(clock.getSingleMinutes()).toBe('YYYO');
    });

    it('should return 2 yellow lights for 2 minutes', () => {
        const date = new Date();
        date.setMinutes(2);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateSingleMinutes();

        console.log(clock.getSingleMinutes());
        expect(clock.getSingleMinutes()).toBe('YYOO');
    });

    it('should return 1 yellow light for 1 minute', () => {
        const date = new Date();
        date.setMinutes(1);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateSingleMinutes();

        console.log(clock.getSingleMinutes());
        expect(clock.getSingleMinutes()).toBe('YOOO');
    });

    it('should return 0 yellow light for 0 minute', () => {
        const date = new Date();
        date.setMinutes(0);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateSingleMinutes();

        console.log(clock.getSingleMinutes());
        expect(clock.getSingleMinutes()).toBe('OOOO');
    });
    
})