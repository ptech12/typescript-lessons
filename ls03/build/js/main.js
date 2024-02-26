"use strict";
// only have string datatype
let stringArr = ['one', 'two', 'three'];
// have union datatype => string | number
let guitars = ['start', 'Les Paul', 5150];
// multiple union datatype => mixed datatypes
let mixedData = ['EVH', 1984, true];
stringArr[0] = '2323';
stringArr.push('he');
guitars[0] = 1984;
guitars.unshift(143);
// defintly accepts string datatype
guitars = stringArr;
// but can't define the other way
// stringArr = guitar
let test = [];
// pre-define the array dataype
let bands = [];
// console.log(bands);
bands.push("Van Helen");
// console.log(bands);
// Tuple
/*
* Tuple has more strict than normal arrays
* also define specified length before
*/
let myTuple = ['Deva', 43, true];
let mixed = ['John', 1, false];
myTuple = mixed;
/*
* objects
*/
let myObj;
// arrays is a type of objects
myObj = [];
// console.log(typeof mixed);
// console.log(typeof bands);
const obj = {
    // already locked to thier desired type 
    prop1: 'Dave',
    prop2: true
    // cannot able to reassign with any other type
};
obj.prop1 = 'ptech12';
// type Guitarist = {
//     name: string,
//     active?: boolean,
//     albums: (string | number)[] // union array type 
// }
// creating object with Guitarist type
let evh = {
    name: "Dave",
    active: false,
    albums: [1984, 5150, 'OU812']
};
// second guitarist obj
let JP = {
    name: "Jimmy",
    active: true,
    albums: ['I', 'II', 'IV']
};
// creating function with type Guitarist
/*
* function greatGuitarist
* parameters: guitarist: Guitarist
* return (String Object)
*/
const greatGuitarist = (guitarist) => {
    // typescript knows in compile time rather than at runtime
    if (guitarist.name) {
        return `Hello ${guitarist.name.toUpperCase()}`;
    }
};
console.log(greatGuitarist(JP));
/* Enums */
var Grade;
(function (Grade) {
    // typescript automatically adds in order
    // instead of ZERO it uses ONE
    Grade[Grade["U"] = 1] = "U";
    Grade[Grade["D"] = 2] = "D";
    Grade[Grade["C"] = 3] = "C";
    Grade[Grade["B"] = 4] = "B";
    Grade[Grade["A"] = 5] = "A";
})(Grade || (Grade = {}));
console.log(Grade.A);
