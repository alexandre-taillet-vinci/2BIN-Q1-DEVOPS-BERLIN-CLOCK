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

    // return the single minutes lamp of the clock
    getSingleMinutes() {
        return this.lamps.singleMinutes.join('');
    }

    // Generate the single minutes lamp of the clock based on the current minutes of the date
    generateSingleMinutes() {
        const minutes = this.date.getMinutes();
        for (let i = 0; i < 4; i++) {
            this.lamps.singleMinutes[i] = (minutes % 5) > i ? YELLOW : OFF;
        }
    }

    // return the five minutes lamp of the clock
    getFiveMinutes(){
        return this.lamps.fiveMinutes.join('');
    }

    // Generate the five minutes lamp of the clock based on the current minutes of the date
    generateFiveMinutes() {
        const minutes = this.date.getMinutes();
        for (let i = 0; i < 11; i++) {
            this.lamps.fiveMinutes[i] = this.getFiveMinuteLampState(minutes, i);
        }
    }

    // Get the state of the five minutes lamp based on the current minutes of the date
    getFiveMinuteLampState(minutes, index) {
        const isOn = Math.floor(minutes / 5) > index;
        if (!isOn) {
            return OFF;
        }
        return (index + 1) % 3 === 0 ? RED : YELLOW;
    }


    // return the single hours lamp of the clock
    getSingleHours(){
        return this.lamps.singleHours.join('');
    }

    // Generate the single hours lamp of the clock based on the current hours of the date
    generateSingleHours() {
        const hours = this.date.getHours();
        for (let i = 0; i < 4; i++) {
            this.lamps.singleHours[i] = (hours % 5) > i ? RED : OFF;
        }
    }

    // return the five hours lamp of the clock
    getFiveHours() {
        return this.lamps.fiveHours.join('');
    }
 
    // Generate the five hours lamp of the clock based on the current hours of the date
    generateFiveHours() {
        const hours = this.date.getHours();
        for (let i = 0; i < 4; i++) {
            this.lamps.fiveHours[i] = (hours / 5) >= i+1 ? RED : OFF;
        }
    }

    // return the seconds lamp of the clock
    getSeconds() {
        return this.lamps.seconds;
    }

    // Generate the seconds lamp of the clock based on the current seconds of the date
    generateSeconds() {
        const seconds = this.date.getSeconds();
        this.lamps.seconds = seconds % 2 === 0 ? RED : OFF;
    }


    // Generate the Berlin Clock using all the features of the clock
    generate() {
        this.generateSingleMinutes();
        this.generateFiveMinutes();
        this.generateSingleHours();
        this.generateFiveHours();
        this.generateSeconds();
    }

    // Get the Berlin Clock in a string format like a real berlin clock
    getClock() {
        return this.getSeconds() + "\n"
            + this.getFiveHours() + "\n"
            + this.getSingleHours() + "\n"
            + this.getFiveMinutes() + "\n"
            + this.getSingleMinutes();
    }

    // Set the time of the clock, the parameter should be a Date Object or a unix timestamp
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