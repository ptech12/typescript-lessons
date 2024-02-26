// Index signatures
// with index signatures
// interface TransactionObj {
//     // cannot use boolean
//     readonly [index: string]: number // this is index signature
// }


// access object prop dynamically
interface TransactionObj{
    readonly [index: string]: number // this is index signature

    Pizza: number,
    Books: number,
    Job: number
}

const todaysTransactions: TransactionObj = {
    Pizza: -10,
    Books: -5,
    Job: 50, // problem if removed;
    // dave dosn't require only the above three
    Dave: 50 
}

console.log(todaysTransactions.Pizza);
console.log(todaysTransactions['Pizza']);


let prop: string = 'Pizza';
// access dynamically
// has no index signature
console.log(todaysTransactions[prop]); 


const todaysNetTranaction = (transactions: TransactionObj): number => {
    let total = 0;
    for (const transaction in transactions) {
        total += transactions[transaction];
    }
    return total
}

console.log(todaysNetTranaction(todaysTransactions));


// typescript can't see the future
// there is problem
console.log(todaysTransactions['Dave']);

/* ================================================================= */
function divider(): void{
    console.log('====================================== ');
}
divider()
interface Student{
    // [key: string]: string | number | number[] | undefined
    name: string,
    GPA: number,
    classes ?: number[]
}

const student: Student = {
    name: 'Dong',
    GPA: 3.5,
    classes: [100, 200]
}

// console.log(student.test); // may be it has test

for (const key in student) {
    // as keyof 
    // create a union literal of each object
    console.log(`${key}: ${student[key as keyof Student]}`);
}

console.log('same as above but different');

Object.keys(student).map(key => {
    console.log(student[key as keyof typeof student]);
})


const logStudentKey = (student: Student, key: keyof Student): void => {
    console.log(`Student ${key}: ${student[key]}`);
}

logStudentKey(student, 'name')



divider();
// index signatures with types

/* 
 * BUT literal is not allowed inside interface while assigning index signatures 
 * in this type we can clearly declare specifically each type
*/

/* interface Incomes {
    [key: string | number]: number
} */

type Streams = 'salary' | 'bonus' | 'sidehultes';
// literal type is allowed inside the type
// here not declared specifically
type Incomes = Record<Streams, number | string>

const monthlyIncomes: Incomes = {
    salary: 500,
    bonus: 100,
    sidehultes: 250
}

for (const rev in monthlyIncomes){
    console.log(monthlyIncomes[rev as keyof Incomes]);
}