class Coder {
  // we know what we are doing
  // hence asserting with !
  secondLang!: string; // assertions

  // props and methods are called members
  // requires constructor
  // visiblity modifiers/members
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Typescript" // language
  ) {
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
  public getAge() {
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
    constructor(
        public computer: string,
        name: string,
        music: string,
        age: number
    ) {

        super(name, music, age); // requires this in first line
        this.computer = computer;
    }

    public getLang() {
        return `I write ${this.lang}`;
    }
}

const Sara = new WebDev('Mac', 'Sara', 'Lofi', 25);

console.log(Sara.getLang());
// console.log(Sara.lang);

// --------------------------------------------

// interface to class
interface Musician {
    // creating a simple interface
    name: string,
    instrument: string,
    play(action: string): string // method
}

class Guitarist implements Musician {
    constructor(
        public name: string,
        public instrument: string
    ) {
        this.name = name;
        this.instrument = instrument;
    }

    play(action: string): string {
        return `${this.name} ${action} the ${this.instrument}`
    }
}
