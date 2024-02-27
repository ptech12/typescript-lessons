// utility types

// Partial 
interface Assignment{
    studentId: string,
    title: string,
    grade: number,
    verified?: boolean
}

// allow us to update only one part of the Object 
// with Partial
const updateAssignment = (assign: Assignment, propsToUpdate: Partial<Assignment>): Assignment => {
    return { ...assign, ...propsToUpdate}
}

const assign1: Assignment = {
    studentId: "vtu12345",
    title: "Final Project",
    grade: 0,
}

console.log(updateAssignment(assign1, { grade: 94 })); 
const assignGraded: Assignment = updateAssignment(assign1, { grade: 97 })

console.log(assignGraded);


// Required and readonly
const recordAssignment = (assign: Required<Assignment>): Assignment => {
    // send to database etc,
    return assign;
}

const assignVerified: Readonly<Assignment> = {
    ...assignGraded, verified: true
}

console.log(recordAssignment({...assignGraded, verified: true}));



// Record
const hexColorMap: Record<string, string> = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
}

// create string literal types
type Students = "Sara" | "Kelly";
type LetterGrades = "A" | "B" | "C" | "D" | "U";

const finalGrades: Record<Students, LetterGrades> = {
    Sara: "A",
    Kelly: "C"
}

// same with interface type
interface Grades {
    a1: number,
    a2: number
}

const gradeData: Record<Students, Grades> = {
    Sara: { a1: 34, a2: 67},
    Kelly: { a1: 63, a2: 90}
}


/*  9.4: Pick and Omit  */
// we are picking up ("studentId" or "grade") From the Assignment
type assignResult =  Pick<Assignment, "studentId" | "grade"> 

const score: assignResult = {
    studentId: "k123", 
    grade: 23
}

// Omit the opposite
type assignPreview = Omit<Assignment, "grade" | "verified">

const preview: assignPreview = {
    // omitted grade and verified
    studentId: 'k123',
    title: " Final Project "
}

// 9.5: Exclude and Extract & NonNullable
/* only with string literal & union types */
type adjustedGrade = Exclude<LetterGrades, "U">

// extract 
type highGrade = Extract<LetterGrades, "A" | "B">


// Nonnullabel
type AllPossible = 'Dave' | 'Mary' | null | undefined;

type NamesOnly = NonNullable<AllPossible>

// complex
// 9.6: ReturnType

//  need to update this whenever function changes
// type newAssign = { title: string, points: number } // create ahead before creating the function

const createNewAssign = (title: string, points: number)  => {
    return { title, points }
}

// instead
type NewAssign = ReturnType<typeof createNewAssign>


const tsAssign: NewAssign = createNewAssign(
    "Utility Types", 100
)

console.log(tsAssign);


//  9.7: Parameters
type AssignParam = Parameters<typeof createNewAssign>

const assignArgs: AssignParam = ["Generics", 100];


const tsAssign2: NewAssign = createNewAssign(...assignArgs);
console.log(tsAssign2);


/* 
    9.8: Awaited Type - helps us with the ReturnType of a Promise
*/

interface User {
    id: number,
    name: string,
    username: string,
    email: string 
 }
 
 const fetchUsers = async (): Promise<User[]> => {
     const data = await fetch(
         'https://jsonplaceholder.typicode.com/users'
     ).then(res => {
         return res.json()
     }).catch(err => {
         if(err instanceof Error) console.error(err.message);
     })
     return data
 }
 
 
 type FetchUserReturnType = Awaited< ReturnType<typeof fetchUsers> >
 
 fetchUsers().then(users => console.log(users);)