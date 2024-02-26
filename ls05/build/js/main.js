"use strict";
// convert to more or less specific
let a = 'hello';
let b = a; // less specifig type
let c = a; // more specific
// fine with typescri[t
// but these syntax doesn't allowed in React
let d = 'world';
let e = 'world';
// adds up or concats the given string
const addOrConcat = (a, b, c) => {
    if (c === 'add') {
        return a + b;
    }
    return ' ' + a + b;
};
let myVar = addOrConcat(1, 4, 'concat'); // assertion as string
// need to carefull - but a string is returned
let nextVar = addOrConcat(1, 4, 'concat'); // assertion as string
// console.log(myVar);
// console.log(nextVar);
// usefult with DOM 
const img = document.querySelector('img'); // even more specific
const myImg = document.getElementById('img'); // even lighter specific
img.src;
myImg.src; // doesn;t have source props
