"use strict";
// utility types
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
// Record
const hexColorMap = {
    red: "FF0000",
    green: "00FF00",
    blue: "0000FF",
};
const finalGrades = {
    Sara: "A",
    Kelly: "C"
};
const gradeData = {
    Sara: { a1: 34, a2: 67 },
    Kelly: { a1: 63, a2: 90 }
};
const score = {
    studentId: "k123",
    grade: 23
};
const preview = {
    // omitted grade and verified
    studentId: 'k123',
    title: " Final Project "
};
// complex
// 9.6: ReturnType
//  need to update this whenever function changes
// type newAssign = { title: string, points: number } // create ahead before creating the function
const createNewAssign = (title, points) => {
    return { title, points };
};
const tsAssign = createNewAssign("Utility Types", 100);
console.log(tsAssign);
const assignArgs = ["Generics", 100];
const tsAssign2 = createNewAssign(...assignArgs);
console.log(tsAssign2);
const fetchUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    const data = yield fetch('https://jsonplaceholder.typicode.com/users').then(res => {
        return res.json();
    }).catch(err => {
        if (err instanceof Error)
            console.error(err.message);
    });
    return data;
});
fetchUsers().then(users => console.log(users));
