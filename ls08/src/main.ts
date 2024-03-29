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

interface HasID{
  id: number
}

const processUser = <T extends HasID>(user: T): T => {
  // process the user with here
  return user
}

console.log(processUser({ id: 1, name: 'ptech12'}));
console.log(processUser({ id: 1, name: 'ptech12'}));

/* --------------------------- complex =---------------------- */

const getUsersProperty = <T extends HasID, K extends keyof T>(users: T[], key: K): T[K][] => {
  return users.map(user => user[key]);
}

const usersArray = [
  {"id":1,"firstName":"Terry","lastName":"Medhurst","maidenName":"Smitham","age":50,"gender":"male","email":"atuny0@sohu.com","phone":"+63 791 675 8914","username":"atuny0","password":"9uQFF1Lh","birthDate":"2000-12-25","image":"https://robohash.org/Terry.png?set=set4","bloodGroup":"A-","height":189,"weight":75.4,"eyeColor":"Green","hair":{"color":"Black","type":"Strands"},"domain":"slashdot.org","ip":"117.29.86.254","address":{"address":"1745 T Street Southeast","city":"Washington","coordinates":{"lat":38.867033,"lng":-76.979235},"postalCode":"20020","state":"DC"},"macAddress":"13:69:BA:56:A3:74","university":"Capitol University","bank":{"cardExpire":"06/22","cardNumber":"50380955204220685","cardType":"maestro","currency":"Peso","iban":"NO17 0695 2754 967"},"company":{"address":{"address":"629 Debbie Drive","city":"Nashville","coordinates":{"lat":36.208114,"lng":-86.58621199999999},"postalCode":"37076","state":"TN"},"department":"Marketing","name":"Blanda-O'Keefe","title":"Help Desk Operator"},"ein":"20-9487066","ssn":"661-64-2976","userAgent":"Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.24 (KHTML, like Gecko) Chrome/12.0.702.0 Safari/534.24","crypto":{"coin":"Bitcoin","wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a","network":"Ethereum (ERC20)"}},
  {"id":2,"firstName":"Sheldon","lastName":"Quigley","maidenName":"Cole","age":28,"gender":"male","email":"hbingley1@plala.or.jp","phone":"+7 813 117 7139","username":"hbingley1","password":"CQutx25i8r","birthDate":"2003-08-02","image":"https://robohash.org/Sheldon.png?set=set4","bloodGroup":"O+","height":187,"weight":74,"eyeColor":"Brown","hair":{"color":"Blond","type":"Curly"},"domain":"51.la","ip":"253.240.20.181","address":{"address":"6007 Applegate Lane","city":"Louisville","coordinates":{"lat":38.1343013,"lng":-85.6498512},"postalCode":"40219","state":"KY"},"macAddress":"13:F1:00:DA:A4:12","university":"Stavropol State Technical University","bank":{"cardExpire":"10/23","cardNumber":"5355920631952404","cardType":"mastercard","currency":"Ruble","iban":"MD63 L6YC 8YH4 QVQB XHIK MTML"},"company":{"address":{"address":"8821 West Myrtle Avenue","city":"Glendale","coordinates":{"lat":33.5404296,"lng":-112.2488391},"postalCode":"85305","state":"AZ"},"department":"Services","name":"Aufderhar-Cronin","title":"Senior Cost Accountant"},"ein":"52-5262907","ssn":"447-08-9217","userAgent":"Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/534.30 (KHTML, like Gecko) Ubuntu/11.04 Chromium/12.0.742.112 Chrome/12.0.742.112 Safari/534.30","crypto":{"coin":"Bitcoin","wallet":"0xb9fc2fe63b2a6c003f1c324c3bfa53259162181a","network":"Ethereum (ERC20)"}}
]


// calling out user

console.log(getUsersProperty(usersArray, 'age'));
console.log(getUsersProperty(usersArray, 'username'));


/* --------------------------- complex =---------------------- */
/* --------------------------- class =---------------------- */
class StateObject<T> {
  private data: T

  constructor(value: T){
    this.data = value;
  }

  get state(): T {
    return this.data
  }

  set state(value: T){
    this.data = value;
  }
}

// class instance
const store = new StateObject("John");
console.log(store.state);
store.state = 'Dave'
console.log(store.state);
// store.state = 23 // num not assignable to string

// exactly specified what obj is used in our state
const myState = new StateObject<(string | number | boolean)[]>([15]);

myState.state = (['Dave', 24, true])

console.log(myState.state);
