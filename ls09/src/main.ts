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


