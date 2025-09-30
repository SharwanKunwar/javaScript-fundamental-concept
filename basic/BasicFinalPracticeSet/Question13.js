/*
👉 You have an array:
let numbers = [3, 7, 2, 9, 5, 8];

Write a program that:
Loops through the array
Prints only the numbers that are greater than 5
*/

let numbers = [3, 7, 2, 9, 5, 8];

let greater = numbers.filter((num)=> num > 5 );
console.log(greater);