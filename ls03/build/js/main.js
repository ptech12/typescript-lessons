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
let mixed = ['John'];
