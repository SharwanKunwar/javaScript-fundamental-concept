/*
Find Top Students by Grade

Description:
You are given an array of student objects. Each student has a name and a grade.
Write a function that returns all students who have the highest grade.
*/

function topStudents(obj){
    let maxScore = -Infinity;
    let Top = [];

    for(let i=0; i<obj.length; i++){
        if(obj[i].grade > maxScore){
            maxScore = obj[i].grade;
        }
    }
    for(let i=0; i<obj.length; i++){
        if(obj[i].grade === maxScore){
            Top.push(obj[i]);
        }
    }
    return Top;
}

const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 92 },
    { name: "David", grade: 75 }
];

let result = topStudents(students);
console.log(result);

