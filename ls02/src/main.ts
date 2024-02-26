let myName: string; // explict declaration
let isLoading: boolean;
let album: any; // any type can be assigned
let union: string | number // it is union type

/* 
    Legal operation in JS
    But TS will not allow
*/
myName = 'sing'

isLoading = true;

album = true;

album = 312

union = 'Van Helen'

const sum = (a: number, b: number) => {
    return a + b;
}

console.log(sum(5, 6));


let re: RegExp = /\w+/g; // RegExp
 