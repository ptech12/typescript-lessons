// using generic
// work with any type
const echo = <T>(arg: T): T => arg;

const isObj = <T>(arg: T): boolean => {
  return typeof arg === "object" && !Array.isArray(arg) && arg !== null;
};

// testing out
console.log(isObj(true));
console.log(isObj("John"));
console.log(isObj([1, 2, 3])); // Array is object type in JS
console.log(isObj({ name: "Hon" }));
console.log(isObj(null));

console.log("///////");

// use of generic
// function need to have some logic
const isTrue = <T>(arg: T): { arg: T; is: boolean } => {
  // checking out array
  if (Array.isArray(arg) && !arg.length) {
    return { arg, is: false };
  }
  // checking for obj
  if (isObj(arg)) {
    return { arg, is: false };
  }
  return {
    arg,
    is: !!arg,
  };
};

console.log(isTrue(0));

console.log(isTrue(true));
console.log(isTrue(1));

console.log(isTrue("Dave"));
console.log(isTrue(""));

console.log(isTrue(null));

console.log(isTrue(undefined));

console.log(isTrue({})); // modified

console.log(isTrue({ name: "Dave" }));

console.log(isTrue([])); // modified

console.log(isTrue([1, 2, 3]));
console.log(isTrue(NaN));

console.log(isTrue(-0));



 interface BoolCheck<T> {
    value: T,
    is: boolean
 }


const checkBoolValue = <T>(arg: T): BoolCheck<T> => {
    // checking out array
    if (Array.isArray(arg) && !arg.length) {
      return { value: arg, is: false };
    }
    // checking for obj
    if (isObj(arg)) {
      return { value: arg, is: false };
    }
    return {
      value: arg,
      is: !!arg,
    }
}