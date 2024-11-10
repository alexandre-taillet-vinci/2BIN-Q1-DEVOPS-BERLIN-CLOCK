const OFF = 'O';
const YELLOW = 'Y';
export class BerlinClock {
    constructor() {
        this.lamps = {
            singleMinutes: [OFF, OFF, OFF, OFF]
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

    setTime(unixTimestamp) {
        this.date = new Date(unixTimestamp * 1000);
    }

    setTime(date) {
        this.date = date;
    }
}