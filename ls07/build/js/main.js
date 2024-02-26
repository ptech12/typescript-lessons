"use strict";
// Index signatures
// with index signatures
// interface TransactionObj {
//     // cannot use boolean
//     readonly [index: string]: number // this is index signature
// }
const todaysTransactions = {
    Pizza: -10,
    Books: -5,
    Job: 50, // problem if removed;
    // dave dosn't require only the above three
    Dave: 50
};
console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);
let prop = 'Pizza';
// access dynamically
// has no index signature
console.log(todaysTransactions[prop]);
const todaysNetTranaction = (transactions) => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total;
};
console.log(todaysNetTranaction(todaysTransactions));
// typescript can't see the future
// there is problem
console.log(todaysTransactions['Dave']);
/* ================================================================= */
function divider() {
    console.log('====================================== ');
}
divider();
const student = {
    name: 'Dong',
    GPA: 3.5,
    classes: [100, 200]
};
// console.log(student.test); // may be it has test
for (const key in student) {
    // as keyof 
    // create a union literal of each object
    console.log(`${key}: ${student[key]}`);
}
console.log('same as above but different');
Object.keys(student).map(key => {
    console.log(student[key]);
});
const logStudentKey = (student, key) => {
    console.log(`Student ${key}: ${student[key]}`);
};
logStudentKey(student, 'name');
divider();
const monthlyIncomes = {
    salary: 500,
    bonus: 100,
    sidehultes: 250
};
for (const rev in monthlyIncomes) {
    console.log(monthlyIncomes[rev]);
}
