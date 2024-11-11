const OFF = 'O';
const YELLOW = 'Y';
const RED = 'R';
export class BerlinClock {
    constructor() {
        this.lamps = {
            singleMinutes: new Array(4).fill(OFF),
            fiveMinutes: new Array(11).fill(OFF),
            singleHours: new Array(4).fill(OFF),
            fiveHours: new Array(4).fill(OFF),
            seconds: OFF
        };
    }

    getSingleMinutes() {
        return this.lamps.singleMinutes.join('');
    }


    generateSingleMinutes() {
        const minutes = this.date.getMinutes();
        for (let i = 0; i < 4; i++) {
            this.lamps.singleMinutes[i] = (minutes % 5) > i ? YELLOW : OFF;
        }
    }

    getFiveMinutes(){
        return this.lamps.fiveMinutes.join('');
    }

    generateFiveMinutes() {
        const minutes = this.date.getMinutes();

        for (let i = 0; i < 11; i++) {
            const isOn = Math.floor(minutes / 5) > i;
            if(!isOn) {
                this.lamps.fiveMinutes[i] = OFF;
                continue;
            }
            if ((i + 1) % 3 === 0) {
                this.lamps.fiveMinutes[i] = RED;
            } else {
                this.lamps.fiveMinutes[i] = YELLOW;
            }
        }
    }

    getSingleHours(){
        return this.lamps.singleHours.join('');
    }

    generateSingleHours() {
        const hours = this.date.getHours();
        for (let i = 0; i < 4; i++) {
            this.lamps.singleHours[i] = (hours % 5) > i ? RED : OFF;
        }
    }

    getFiveHours() {
        return this.lamps.fiveHours.join('');
    }
 
    generateFiveHours() {
        const hours = this.date.getHours();
        for (let i = 0; i < 4; i++) {
            this.lamps.fiveHours[i] = (hours / 5) >= i+1 ? RED : OFF;
        }
    }

    getSeconds() {
        return this.lamps.seconds;
    }

    generateSeconds() {
        const seconds = this.date.getSeconds();
        this.lamps.seconds = seconds % 2 === 0 ? RED : OFF;
    }

    generate() {
        this.generateSingleMinutes();
        this.generateFiveMinutes();
        this.generateSingleHours();
        this.generateFiveHours();
        this.generateSeconds();
    }

    getClock() {
        //this.generate();
        return this.getSeconds() + "\n"
            + this.getFiveHours() + "\n"
            + this.getSingleHours() + "\n"
            + this.getFiveMinutes() + "\n"
            + this.getSingleMinutes();
    }

    setTime(date) {
        if(date instanceof Date) {
            this.date = date;
            return;
        }
        else if(typeof date === 'number') {
            this.date = new Date(date * 1000);
            return;
        }
        throw new Error("The parameter should be a Date Object or a unix timestamp");
    }
}