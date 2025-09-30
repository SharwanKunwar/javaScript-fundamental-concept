/*
You have an array of objects representing people:

const people = [
  { name: "Alice", age: 22 },
  { name: "Bob", age: 17 },
  { name: "Charlie", age: 25 },
  { name: "David", age: 15 }
];


Write a program that:

Loops through the array

Prints the names of people who are 18 or older
*/

const people = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 25 },
    { name: "David", age: 15 }
];

people.forEach((element)=>{
    if(element.age >= 18){
        console.log(element.name);
    }
})