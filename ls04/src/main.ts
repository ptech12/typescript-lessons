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

let multiply: mathParams = function(c, d){
    return c * d;
}

logMsg(multiply(2,2))