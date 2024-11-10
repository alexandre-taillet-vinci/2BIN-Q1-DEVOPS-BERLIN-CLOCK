import { Main } from '../src/app.js';

describe("A suite of tests for the function setSingleMinutes", function() {
    it('should return default value of the clock', () => {
        let main = new Main();
        console.log(main.getSingleMinutes());
        expect(main.getSingleMinutes()).toBe('OOOO');
    });
    
})