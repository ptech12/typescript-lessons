// only have string datatype
let stringArr = ['one', 'two', 'three'];
// have union datatype => string | number
let guitars = ['start', 'Les Paul', 5150];
// multiple union datatype => mixed datatypes
let mixedData =['EVH', 1984, true];


stringArr[0] = '2323'


stringArr.push('he');

guitars[0] = 1984;
guitars.unshift(143);


// defintly accepts string datatype
guitars = stringArr
// but can't define the other way
// stringArr = guitar


let test = []
// pre-define the array dataype
let bands: string[] = [];

// console.log(bands);
bands.push("Van Helen");
// console.log(bands);


// Tuple
/* 
* Tuple has more strict than normal arrays
* also define specified length before
*/
let myTuple: [string, number, boolean] = ['Deva', 43, true];

let mixed: [string, number, boolean] = ['John', 1, false]

myTuple = mixed

/* 
* objects
*/

let myObj: object;
// arrays is a type of objects
myObj = []

// console.log(typeof mixed);
// console.log(typeof bands);

const obj = {
    // already locked to thier desired type 
    prop1: 'Dave',
    prop2: true
    // cannot able to reassign with any other type
}

obj.prop1 = 'ptech12'


/* 
    pre-defining the type using 
    => type (var)
    same as the interface
*/
interface Guitarist {
    name?: string,
    active?: boolean,
    albums: (string | number)[] // union array type 
}
// type Guitarist = {
//     name: string,
//     active?: boolean,
//     albums: (string | number)[] // union array type 
// }


// creating object with Guitarist type
let evh: Guitarist =  {
    name: "Dave",
    active: false,
    albums: [1984, 5150, 'OU812']
}
// second guitarist obj
let JP: Guitarist =  {
    name: "Jimmy",
    active: true,
    albums: ['I', 'II', 'IV']
}

// creating function with type Guitarist
/* 
* function greatGuitarist
* parameters: guitarist: Guitarist
* return (String Object)
*/
const greatGuitarist = (guitarist: Guitarist) => {
    // typescript knows in compile time rather than at runtime
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`
    }
}

console.log(greatGuitarist(JP));

/* Enums */
enum Grade {
    // typescript automatically adds in order
    // instead of ZERO it uses ONE
    U = 1,
    D,
    C,
    B,
    A
}

console.log(Grade.A);
