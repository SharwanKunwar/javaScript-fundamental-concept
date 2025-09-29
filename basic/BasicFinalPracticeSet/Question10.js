/*
Question 11

You have this array of students:

const students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 40 },
  { name: "Charlie", marks: 65 }
];

Write a program that loops through the students and prints:
"Alice: Pass" (if marks ≥ 50)
"Bob: Fail" (if marks < 50)
*/

const students = [
  { name: "Alice", marks: 85 },
  { name: "Bob", marks: 40 },
  { name: "Charlie", marks: 65 }
];

students.forEach((element)=>{
    if(element.marks >= 50){
        console.log(`"${element.name} : pass"`);
    }else{
        console.log(`"${element.name} : Fail"`);
    }
})