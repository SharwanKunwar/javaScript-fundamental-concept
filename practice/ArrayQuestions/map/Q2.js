// You have an array of student objects:
// name: ram, marks: 70
// name: sita, marks: 88
// name: hari, marks: 50

// use the map() method to create a new array that contains only the student names in uppercase;

let students = [
    {name: "Sharwan kunwar", marks: 70},
    {name: "Hari kunwar", marks: 80},
    {name: "Susant kunwar", marks: 55},
];

let upperNames = students.map(function(val){
    return val.name.toUpperCase();
})

console.info(upperNames);