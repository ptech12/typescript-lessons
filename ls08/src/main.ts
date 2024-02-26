

// using generic
// work with any type
const echo = <T>(arg: T): T => arg;


const isObj = <T>(arg: T): boolean => {
    return (typeof arg === 'object' && !Array.isArray(arg) && arg !== null)
}

// testing out
console.log(isObj(true));
console.log(isObj('John'));
console.log(isObj([1,2,3])); // Array is object type in JS
console.log(isObj({name: 'Hon'}));
console.log(isObj(null));

console.log('///////');

// use of generic
// function need to have some logic
const isTrue = <T>(arg: T): { arg: T, is: boolean} => {
    // checking out array
    if(Array.isArray(arg) && !arg.length){
        return { arg, is: false }
    }
    // checking for obj
    if(isObj(arg)) {
        return { arg, is: false }
    }
    return {
        arg,
        is: !!arg
    }
}

 