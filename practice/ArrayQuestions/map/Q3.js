// You have this array of student objects:

/*let students = [
  { name: "Ram", marks: 70 },
  { name: "Sita", marks: 85 },
  { name: "Hari", marks: 60 }
];
*/

// Use map() to create a new array of object where each object include:
// * name (same as original)
// * marks (smae as original)
// * grade based on marks:

/*
80+ : "A"
70-79 : "B"
60 - 69 : "C"
below 60 : "D"
*/

let students = [
  { name: "Ram", marks: 70  },
  { name: "Sita", marks: 85 },
  { name: "Hari", marks: 60 }
];

let newStudents = students.map(function(val){
    let grade;
    if(val.marks >= 80) grade="A";
    else if(val.marks >= 70 && val.marks < 80) grade = "B";
    else if(val.marks >= 60 && val.marks < 70) grade = "C";
    else grade = "D"; 

    return {
        name: val.name,
        marks: val.marks,
        grade: grade
    }
})

console.log(newStudents);