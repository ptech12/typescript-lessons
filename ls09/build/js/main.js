"use strict";
// utility types
// allow us to update only one part of the Object 
// with Partial
const updateAssignment = (assign, propsToUpdate) => {
    return Object.assign(Object.assign({}, assign), propsToUpdate);
};
const assign1 = {
    studentId: "vtu12345",
    title: "Final Project",
    grade: 0,
};
console.log(updateAssignment(assign1, { grade: 94 }));
const assignGraded = updateAssignment(assign1, { grade: 97 });
console.log(assignGraded);
// Required and readonly
const recordAssignment = (assign) => {
    // send to database etc,
    return assign;
};
const assignVerified = Object.assign(Object.assign({}, assignGraded), { verified: true });
console.log(recordAssignment(Object.assign(Object.assign({}, assignGraded), { verified: true })));
