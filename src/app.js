export const OFF = 'O';
export class Main {
    constructor() {
        this.lamps = {
            singleMinutes: [OFF, OFF, OFF, OFF]
        };
    }

    getSingleMinutes() {
        return this.lamps.singleMinutes.join('');
    }
}