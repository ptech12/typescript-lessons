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


const Page = new Guitarist('Jimmy', 'guitar')
console.log( Page.play('strums'));

/* ---------------------------------- */


class Peeps{
    static count: number = 0; // does not need any instance creation

    static getCount(): number{
        // same goes for the methods
        return Peeps.count;
    }

    public id: number;

    constructor(public name: string){
        this.name = name;
        this.id = ++Peeps.count; // count is = 0
    }
}

const John = new Peeps('John')
const Steve = new Peeps('Steve')
const Amy = new Peeps('Amy')

console.log(`Total static count ${Peeps.count}`);

console.log('John id', John.id);
console.log('Steve id', Steve.id);
console.log('Amy id', Amy.id);

