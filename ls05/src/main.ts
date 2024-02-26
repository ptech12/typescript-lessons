// create new alias
type One = string;
type Two = string | number;
type Three = 'hello';


// convert to more or less specific
let a: One = 'hello';

let b = a as Two // less specifig type
let c = a as Three // more specific

// fine with typescri[t
// but these syntax doesn't allowed in React
let d = <One>'world';
let e = <string | number>'world'

// adds up or concats the given string
const addOrConcat = (a: number, b: number, c: 'add' | 'concat'): number | string => {
    if (c === 'add') {
        return a + b;
    }
    return ' ' + a + b;
}

let myVar: string = addOrConcat(1, 4, 'concat') as string // assertion as string

// need to carefull - but a string is returned
let nextVar: number = addOrConcat(1, 4, 'concat') as number // assertion as string

// console.log(myVar);
// console.log(nextVar);

// usefult with DOM 
const img = document.querySelector('img')!; // even more specific
const myImg = document.getElementById('img') as HTMLImageElement; // even lighter specific

img.src
myImg.src // doesn;t have source props