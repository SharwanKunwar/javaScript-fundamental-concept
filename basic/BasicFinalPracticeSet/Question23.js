/*
Problem 7: Filter Students by Grade

Description:
You are given an array of student objects. Write a function that returns only the students who have grade "A".

function getTopStudents(students) {
    // your code here
}


*/

function getTopStudents(student){
    student.forEach(element => {
        if(element.grade === "A"){
            console.log(element);
        }
    });
}

const student = [
    { name: "Alice", grade: "A" },
    { name: "Bob", grade: "B" },
    { name: "Charlie", grade: "A" }
];

getTopStudents(student);