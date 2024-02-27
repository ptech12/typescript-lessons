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
