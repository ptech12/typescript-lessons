"use strict";
class Coder {
    // props and methods are called members
    // requires constructor
    // visiblity modifiers/members
    constructor(name, music, age, lang = "Typescript" // language
    ) {
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
        // assignment in body does'nt require
        this.name = name;
        this.music = music;
        this.age = age;
        this.lang = lang;
    }
    /**
     * age
     * can be accessed by derived classes
     */
    getAge() {
        return `Hello, I'm ${this.age}`;
    }
}
const Dave = new Coder("Dave", "Rock", 42);
console.log(Dave.getAge());
// legal in Javascript
// console.log(Dave.age);
// console.log(Dave.lang);
// console.log(Dave.name);
// extended class
// childern classes
class WebDev extends Coder {
    constructor(computer, name, music, age) {
        super(name, music, age); // requires this in first line
        this.computer = computer;
        this.computer = computer;
    }
    getLang() {
        return `I write ${this.lang}`;
    }
}
const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);
console.log(Sara.getLang());
class Guitarist {
    constructor(name, instrument) {
        this.name = name;
        this.instrument = instrument;
        this.name = name;
        this.instrument = instrument;
    }
    play(action) {
        return `${this.name} ${action} the ${this.instrument}`;
    }
}
const Page = new Guitarist('Jimmy', 'guitar');
console.log(Page.play('strums'));
/* ---------------------------------- */
class Peeps {
    static getCount() {
        // same goes for the methods
        return Peeps.count;
    }
    constructor(name) {
        this.name = name;
        this.name = name;
        this.id = ++Peeps.count; // count is = 0
    }
}
Peeps.count = 0; // does not need any instance creation
const John = new Peeps('John');
const Steve = new Peeps('Steve');
const Amy = new Peeps('Amy');
console.log(`Total static count ${Peeps.count}`);
console.log('John id', John.id);
console.log('Steve id', Steve.id);
console.log('Amy id', Amy.id);
/* ---------------------------------- */
console.log('* ---------------------------------- *');
class Bands {
    constructor() {
        // init as empty array
        this.dataState = [];
    }
    // get makes the methods as getter fucntion
    get data() {
        return this.dataState;
    }
    set data(value) {
        if (Array.isArray(value) && value.every(el => typeof el === 'string')) {
            this.dataState = value;
            return;
        }
        else
            throw new Error('Param is not an array of strings');
    }
}
// testing it out
const MyBands = new Bands();
MyBands.data = ['Neil Young', 'Led Zep'];
console.log(MyBands.data);
MyBands.data = [...MyBands.data, 'ZZ Top'];
console.log(MyBands.data);
MyBands.data = ['Van Halen', '999'];
