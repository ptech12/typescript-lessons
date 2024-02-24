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
/*
    c is optional param => error: c is possibly undefined
    for that we use typecard
*/
const addAll = (a, b, c) => {
    // typecard
    if (c !== undefined) {
        return a + b + c;
    }
    // if below statement is not present, 
    // the functions lacks an return because there is a possiblity
    // that the above if statement may excute or not
    return a + b;
};
logMsg(addAll(2, 2));
logMsg(addAll(2, 2, 8));
/*
    c is deafult value,
*/
const sumAll = (a, b, c = 2) => {
    // for default value we don't need typecard the check wheather it 
    // is undefined
    return a + b;
};
