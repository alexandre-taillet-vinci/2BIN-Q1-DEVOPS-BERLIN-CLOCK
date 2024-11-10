import { BerlinClock } from '../src/app.js';

describe("A suite of tests for the function generateSingleMinutes", function() {
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
});

describe("A suite of tests for the function generateFiveMinutes", function() {
    it('should return default value of the clock', () => {
        let clock = new BerlinClock();
        console.log(clock.getFiveMinutes());
        expect(clock.getFiveMinutes()).toBe('OOOOOOOOOOO');
    });

    it('should return 11 lights for 55 minutes', () => {
        const date = new Date();
        date.setMinutes(55);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateFiveMinutes();

        console.log(clock.getFiveMinutes());
        expect(clock.getFiveMinutes()).toBe('YYRYYRYYRYY');
    });

    it('should return 10 lights for 50 minutes', () => {
        const date = new Date();
        date.setMinutes(50);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateFiveMinutes();

        console.log(clock.getFiveMinutes());
        expect(clock.getFiveMinutes()).toBe('YYRYYRYYRYO');
    });

    it('should return 9 lights for 45 minutes', () => {
        const date = new Date();
        date.setMinutes(45);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateFiveMinutes();

        console.log(clock.getFiveMinutes());
        expect(clock.getFiveMinutes()).toBe('YYRYYRYYROO');
    });

    it('should return 8 lights for 40 minutes', () => {
        const date = new Date();
        date.setMinutes(40);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateFiveMinutes();

        console.log(clock.getFiveMinutes());
    
        expect(clock.getFiveMinutes()).toBe('YYRYYRYYOOO');
    });

    it('should return 7 lights for 35 minutes', () => {
        const date = new Date();
        date.setMinutes(35);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateFiveMinutes();

        console.log(clock.getFiveMinutes());
        expect(clock.getFiveMinutes()).toBe('YYRYYRYOOOO');
    });

    it('should return 6 lights for 30 minutes', () => {
        const date = new Date();
        date.setMinutes(30);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateFiveMinutes();

        console.log(clock.getFiveMinutes());
        expect(clock.getFiveMinutes()).toBe('YYRYYROOOOO');
    });

    it('should return 5 lights for 25 minutes', () => {
        const date = new Date();
        date.setMinutes(25);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateFiveMinutes();

        console.log(clock.getFiveMinutes());
        expect(clock.getFiveMinutes()).toBe('YYRYYOOOOOO');
    });

    it('should return 4 lights for 20 minutes', () => {
        const date = new Date();
        date.setMinutes(20);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateFiveMinutes();

        console.log(clock.getFiveMinutes());
        expect(clock.getFiveMinutes()).toBe('YYRYOOOOOOO');
    });

    it('should return 3 lights for 15 minutes', () => {
        const date = new Date();
        date.setMinutes(15);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateFiveMinutes();

        console.log(clock.getFiveMinutes());
        expect(clock.getFiveMinutes()).toBe('YYROOOOOOOO');
    });

    it('should return 2 lights for 10 minutes', () => {
        const date = new Date();
        date.setMinutes(10);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateFiveMinutes();

        console.log(clock.getFiveMinutes());
        expect(clock.getFiveMinutes()).toBe('YYOOOOOOOOO');
    });

    it('should return 1 light for 5 minutes', () => {
        const date = new Date();
        date.setMinutes(5);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateFiveMinutes();

        console.log(clock.getFiveMinutes());
        expect(clock.getFiveMinutes()).toBe('YOOOOOOOOOO');
    });

    it('should return 0 light for 0 minutes', () => {
        const date = new Date();
        date.setMinutes(0);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateFiveMinutes();

        console.log(clock.getFiveMinutes());
        expect(clock.getFiveMinutes()).toBe('OOOOOOOOOOO');
    });
});

describe("A suite of tests for the function generateSingleHOurs", () => {
    it('should return default value of the clock', () => {
        let clock = new BerlinClock();
        console.log(clock.getSingleHours());
        expect(clock.getSingleHours()).toBe('OOOO');
    });

    it('should return 4 red lights for 19 hours', () => {
        
        const date = new Date();
        date.setHours(19);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateSingleHours();

        console.log(clock.getSingleHours());
        expect(clock.getSingleHours()).toBe('RRRR');
    });
    

    it('should return 3 red lights for 18 hours', () => {
        const date = new Date();
        date.setHours(18);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateSingleHours();

        console.log(clock.getSingleHours());
        expect(clock.getSingleHours()).toBe('RRRO');
    });

    it('should return 2 red lights for 12 hours', () => {
        const date = new Date();
        date.setHours(12);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateSingleHours();

        console.log(clock.getSingleHours());
        expect(clock.getSingleHours()).toBe('RROO');
    });

    it('should return 1 red light for 6 hours', () => {
        const date = new Date();
        date.setHours(6);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateSingleHours();

        console.log(clock.getSingleHours());
        expect(clock.getSingleHours()).toBe('ROOO');
    });

    it('should return 0 red light for 0 hours', () => {
        const date = new Date();
        date.setHours(0);

        let clock = new BerlinClock();

        clock.setTime(date);
        clock.generateSingleHours();

        console.log(clock.getSingleHours());
        expect(clock.getSingleHours()).toBe('OOOO');
    });
    
});
