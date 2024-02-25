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
