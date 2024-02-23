"use strict";
// Literal type
// Also keeps the code DRY
let myName;
myName = 'Dave';
let userName;
userName = "John";
// functions
/* a and b are number type */
/*
 typescript automattically inferes the return type as number
 unless explictly mentions
*/
const add = (a, b) => {
    return a + b;
};
/* return type as if nothing return void */
const logMsg = (msg) => {
    console.log(msg);
};
logMsg('Hello');
logMsg(add(2, 5));
// logMsg('Hello')
/* normal function */
let substract = function (c, d) {
    return c - d;
};
let multiply = function (c, d) {
    return c * d;
};
logMsg(multiply(2, 2));
