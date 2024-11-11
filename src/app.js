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
            if ((i + 1) % 3 === 0 && (minutes / 5) > i) {
                this.lamps.fiveMinutes[i] = RED;
            } else {
                this.lamps.fiveMinutes[i] = (minutes / 5) > i ? YELLOW : OFF;
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

    getSeconds() {
        return this.lamps.seconds;
    }

    generateSeconds() {
        const seconds = this.date.getSeconds();
        this.lamps.seconds = seconds % 2 === 0 ? RED : OFF;
    }

    generateFiveHours() {
        const hours = this.date.getHours();
        for (let i = 0; i < 4; i++) {
            this.lamps.fiveHours[i] = (hours / 5) > i+1  ? RED : OFF;
        }
    }

    setTime(unixTimestamp) {
        this.date = new Date(unixTimestamp * 1000);
    }

    setTime(date) {
        this.date = date;
    }
}