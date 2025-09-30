/*
👉 You have an object representing a student:

const student = { name: "Sharwan", marks: 75 };

Write a program that:
Prints "Pass" if marks ≥ 50
Prints "Fail" if marks < 50
*/

const student = {
    name: "Sharwan",
    marks: 75
}

if(student.marks >= 50) console.log("Pass");
else console.log("Fail");