/*
Question 3 (Objects + Conditionals)

👉 Create an object student with the following properties:
name (string)
age (number)
marks (number out of 100)
Then write a conditional:
If marks ≥ 50 → print "Pass"
Otherwise → print "Fail"
*/

const student = {
    name: "Sharwan",
    age: 22,
    marks: 90
}

if(student.marks >= 50) console.log("pass");
else console.log("fail");