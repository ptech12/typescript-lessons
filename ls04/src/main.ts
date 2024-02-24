// Keeps the code DRY
// Don't Repeat Yourself
/* 
    type Aliases
*/
type strOrNum = string | number;

type strOrNumArray = (string | number)[]


type Guitarist = {
    name?: string,
    active: boolean,
    // using type aliases => strOrNumArray
    albums: strOrNumArray  // union array type 
}

type userId = strOrNum

// Literal type
// Also keeps the code DRY
let myName: 'Dave';

myName = 'Dave'

let userName: 'Dave' | 'John' | 'Amy';

userName = "John"

// functions
/* a and b are number type */
/*
 typescript automattically inferes the return type as number 
 unless explictly mentions
*/
const add = (a: number, b: number): number => {
    return a + b;
}
/* return type as if nothing return void */
const logMsg = (msg: any): void => {
    console.log(msg);
}

logMsg('Hello')
logMsg(add(2, 5))
// logMsg('Hello')

/* normal function */
let substract = function(c: number, d: number): number {
    return c - d;
}

type mathParams = (a: number, b: number) => number;

interface multipplyInterface {
    (a: number, b: number): number
}

let multiply: mathParams = function(c, d){
    return c * d;
}

logMsg(multiply(2,2))

/* 
    c is optional param => error: c is possibly undefined
    for that we use typecard
*/
const addAll = (a: number, b: number, c?: number): number => {
    // typecard
    if (c !== undefined) {
        return a + b + c;
        
    }
    // if below statement is not present, 
    // the functions lacks an return because there is a possiblity
    // that the above if statement may excute or not
    return a + b;
}
logMsg(addAll(2, 2))
logMsg(addAll(2, 2, 8))
/* 
    c is deafult value, 
*/
const sumAll = (a: number, b: number, c: number = 2): number => {

    // for default value we don't need typecard the check wheather it 
    // is undefined
    return a + b;
}