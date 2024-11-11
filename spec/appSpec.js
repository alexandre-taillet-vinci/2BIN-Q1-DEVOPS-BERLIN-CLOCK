import { BerlinClock } from "../src/app.js";

describe("A suite of tests for the function generateSingleMinutes", function () {
  it("should return default value of the clock", () => {
    let clock = new BerlinClock();
    console.log(clock.getSingleMinutes());
    expect(clock.getSingleMinutes()).toBe("OOOO");
  });

  it("should return 4 yellow lights for 4 minutes", () => {
    const date = new Date();
    date.setMinutes(4);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateSingleMinutes();

    console.log(clock.getSingleMinutes());
    expect(clock.getSingleMinutes()).toBe("YYYY");
  });

  it("should return 3 yellow lights for 3 minutes", () => {
    const date = new Date();
    date.setMinutes(3);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateSingleMinutes();

    console.log(clock.getSingleMinutes());
    expect(clock.getSingleMinutes()).toBe("YYYO");
  });

  it("should return 2 yellow lights for 2 minutes", () => {
    const date = new Date();
    date.setMinutes(2);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateSingleMinutes();

    console.log(clock.getSingleMinutes());
    expect(clock.getSingleMinutes()).toBe("YYOO");
  });

  it("should return 1 yellow light for 1 minute", () => {
    const date = new Date();
    date.setMinutes(1);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateSingleMinutes();

    console.log(clock.getSingleMinutes());
    expect(clock.getSingleMinutes()).toBe("YOOO");
  });

  it("should return 0 yellow light for 0 minute", () => {
    const date = new Date();
    date.setMinutes(0);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateSingleMinutes();

    console.log(clock.getSingleMinutes());
    expect(clock.getSingleMinutes()).toBe("OOOO");
  });
});

describe("A suite of tests for the function generateFiveMinutes", function () {
  it("should return default value of the clock", () => {
    let clock = new BerlinClock();
    console.log(clock.getFiveMinutes());
    expect(clock.getFiveMinutes()).toBe("OOOOOOOOOOO");
  });

  it("should return 11 lights for 56 minutes", () => {
    const date = new Date();
    date.setMinutes(56);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateFiveMinutes();

    console.log(clock.getFiveMinutes());
    expect(clock.getFiveMinutes()).toBe("YYRYYRYYRYY");
  });

  it("should return 10 lights for 52 minutes", () => {
    const date = new Date();
    date.setMinutes(52);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateFiveMinutes();

    console.log(clock.getFiveMinutes());
    expect(clock.getFiveMinutes()).toBe("YYRYYRYYRYO");
  });

  it("should return 9 lights for 47 minutes", () => {
    const date = new Date();
    date.setMinutes(47);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateFiveMinutes();

    console.log(clock.getFiveMinutes());
    expect(clock.getFiveMinutes()).toBe("YYRYYRYYROO");
  });

  it("should return 8 lights for 41 minutes", () => {
    const date = new Date();
    date.setMinutes(41);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateFiveMinutes();

    console.log(clock.getFiveMinutes());

    expect(clock.getFiveMinutes()).toBe("YYRYYRYYOOO");
  });

  it("should return 7 lights for 35 minutes", () => {
    const date = new Date();
    date.setMinutes(35);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateFiveMinutes();

    console.log(clock.getFiveMinutes());
    expect(clock.getFiveMinutes()).toBe("YYRYYRYOOOO");
  });

  it("should return 6 lights for 30 minutes", () => {
    const date = new Date();
    date.setMinutes(30);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateFiveMinutes();

    console.log(clock.getFiveMinutes());
    expect(clock.getFiveMinutes()).toBe("YYRYYROOOOO");
  });

  it("should return 5 lights for 25 minutes", () => {
    const date = new Date();
    date.setMinutes(25);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateFiveMinutes();

    console.log(clock.getFiveMinutes());
    expect(clock.getFiveMinutes()).toBe("YYRYYOOOOOO");
  });

  it("should return 4 lights for 20 minutes", () => {
    const date = new Date();
    date.setMinutes(20);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateFiveMinutes();

    console.log(clock.getFiveMinutes());
    expect(clock.getFiveMinutes()).toBe("YYRYOOOOOOO");
  });

  it("should return 3 lights for 15 minutes", () => {
    const date = new Date();
    date.setMinutes(15);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateFiveMinutes();

    console.log(clock.getFiveMinutes());
    expect(clock.getFiveMinutes()).toBe("YYROOOOOOOO");
  });

  it("should return 2 lights for 10 minutes", () => {
    const date = new Date();
    date.setMinutes(10);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateFiveMinutes();

    console.log(clock.getFiveMinutes());
    expect(clock.getFiveMinutes()).toBe("YYOOOOOOOOO");
  });

  it("should return 1 light for 5 minutes", () => {
    const date = new Date();
    date.setMinutes(5);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateFiveMinutes();

    console.log(clock.getFiveMinutes());
    expect(clock.getFiveMinutes()).toBe("YOOOOOOOOOO");
  });

  it("should return 0 light for 0 minutes", () => {
    const date = new Date();
    date.setMinutes(0);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateFiveMinutes();

    console.log(clock.getFiveMinutes());
    expect(clock.getFiveMinutes()).toBe("OOOOOOOOOOO");
  });
});

describe("A suite of tests for the function generateSingleHOurs", () => {
  it("should return default value of the clock", () => {
    let clock = new BerlinClock();
    console.log(clock.getSingleHours());
    expect(clock.getSingleHours()).toBe("OOOO");
  });

  it("should return 4 red lights for 19 hours", () => {
    const date = new Date();
    date.setHours(19);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateSingleHours();

    console.log(clock.getSingleHours());
    expect(clock.getSingleHours()).toBe("RRRR");
  });

  it("should return 3 red lights for 18 hours", () => {
    const date = new Date();
    date.setHours(18);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateSingleHours();

    console.log(clock.getSingleHours());
    expect(clock.getSingleHours()).toBe("RRRO");
  });

  it("should return 2 red lights for 12 hours", () => {
    const date = new Date();
    date.setHours(12);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateSingleHours();

    console.log(clock.getSingleHours());
    expect(clock.getSingleHours()).toBe("RROO");
  });

  it("should return 1 red light for 6 hours", () => {
    const date = new Date();
    date.setHours(6);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateSingleHours();

    console.log(clock.getSingleHours());
    expect(clock.getSingleHours()).toBe("ROOO");
  });

  it("should return 0 red light for 0 hours", () => {
    const date = new Date();
    date.setHours(0);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateSingleHours();

    console.log(clock.getSingleHours());
    expect(clock.getSingleHours()).toBe("OOOO");
  });
});

describe("A suite of test for the function generateFiveHours", () => {
  it("should return default value of the clock", () => {
    let clock = new BerlinClock();
    console.log(clock.getFiveHours());
    expect(clock.getFiveHours()).toBe("OOOO");
  });

  it("should return 4 red light for 23 hours", () => {
    const date = new Date();
    date.setHours(23);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateFiveHours();

    console.log(clock.getFiveHours());
    expect(clock.getFiveHours()).toBe("RRRR");
  });

  it("should return 3 red light for 19 hours", () => {
    const date = new Date();
    date.setHours(19);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateFiveHours();

    console.log(clock.getFiveHours());
    expect(clock.getFiveHours()).toBe("RRRO");
  });

  it("should return 2 red light for 14 hours", () => {
    const date = new Date();
    date.setHours(10);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateFiveHours();

    console.log(clock.getFiveHours());
    expect(clock.getFiveHours()).toBe("RROO");
  });

  it("should return 1 red light for 9 hours", () => {
    const date = new Date();
    date.setHours(9);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateFiveHours();

    console.log(clock.getFiveHours());
    expect(clock.getFiveHours()).toBe("ROOO");
  });

  it("should return 0 red light for 4 hours", () => {
    const date = new Date();
    date.setHours(4);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateFiveHours();

    console.log(clock.getFiveHours());
    expect(clock.getFiveHours()).toBe("OOOO");
  });

  it("should return 0 red light for 0 hours", () => {
    const date = new Date();
    date.setHours(0);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateFiveHours();

    console.log(clock.getFiveHours());
    expect(clock.getFiveHours()).toBe("OOOO");
  });
});

describe("A suite of tests for the function generateSeconds", () => {
  it("should return default value of the clock", () => {
    let clock = new BerlinClock();
    console.log(clock.getSeconds());
    expect(clock.getSeconds()).toBe("O");
  });

  it("should return red light for even seconds", () => {
    const date = new Date();
    date.setSeconds(0);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateSeconds();

    console.log(clock.getSeconds());
    expect(clock.getSeconds()).toBe("R");
  });

  it("should return off light for odd seconds", () => {
    const date = new Date();
    date.setSeconds(1);

    let clock = new BerlinClock();

    clock.setTime(date);
    clock.generateSeconds();

    console.log(clock.getSeconds());
    expect(clock.getSeconds()).toBe("O");
  });
});

describe("Clock integration", () => {
    it("check if clock work with 13h52 and 4 seconds", () => {
        const expected = "R" + "\n" + "RROO" + "\n" + "RRRO" + "\n" + "YYRYYRYYRYO" + "\n" + "YYOO";
        
        const date = new Date();
        date.setHours(13);
        date.setMinutes(52);
        date.setSeconds(4);
    
        let clock = new BerlinClock();
    
        clock.setTime(date);
        clock.generate();
    
        console.log("clock : ")
        console.log(clock.getClock());
        expect(clock.getClock()).toBe(expected);
      });
      it("check if clock work with 10h30 and 3 seconds with UNIX Timestamp format", () => {
        const expected = "O" + "\n" + "RROO" + "\n" + "OOOO" + "\n" + "YYRYYROOOOO" + "\n" + "OOOO";
    
        let clock = new BerlinClock();
    
        console.log("testDate : " + new Date(1731317403*1000))
        clock.setTime(1731317403);
        clock.generate();
    
        console.log("clock : ")
        console.log(clock.getClock());
        expect(clock.getClock()).toBe(expected);
      });
});
