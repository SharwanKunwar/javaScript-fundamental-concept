// You are given an array of objects representing students and their marks.
// * Find the first student who scored less then 40 (fail)
// * Also, find the index of that student in the array.


let students= [
    { name: "Anita", marks: 85 },
    { name: "Bishal", marks: 32 },
    { name: "Rita", marks: 76 },
    { name: "Sam", marks: 29 }
];

let indo = students.findIndex(val => val.marks < 40)

console.log(students[indo]);
console.info(indo);