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
            this.lamps.fiveMinutes[i] = this.getFiveMinuteLampState(minutes, i);
        }
    }

    getFiveMinuteLampState(minutes, index) {
        const isOn = Math.floor(minutes / 5) > index;
        if (!isOn) {
            return OFF;
        }
        return (index + 1) % 3 === 0 ? RED : YELLOW;
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

// Main function to initialize and display the Berlin Clock
// The clock will be updated every second
// Ctrl + C to stop the clock
function main() {
    const clock = new BerlinClock();
    
    setInterval(() => {
        const currentDate = new Date();
        clock.setTime(currentDate);
        clock.generate();
        const berlinClock = clock.getClock();
        console.log("Berlin Clock : ");
        console.log(berlinClock);
        console.log("-------------------------------------------------");
    }, 1000);
}

// Run the main function with node src/app.js
main();