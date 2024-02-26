"use strict";
let myName; // explict declaration
let isLoading;
let album; // any type can be assigned
let union; // it is union type
/*
    Legal operation in JS
    But TS will not allow
*/
myName = 'sing';
isLoading = true;
album = true;
album = 312;
union = 'Van Helen';
const sum = (a, b) => {
    return a + b;
};
console.log(sum(5, 6));
let re = /\w+/g; // RegExp
