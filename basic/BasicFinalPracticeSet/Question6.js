/*
Question 6 (Loops + Arrays + Conditionals)

👉 Given an array of numbers [3, 7, 2, 9, 4, 5], write a program to:
Find the largest number in the array.
Print it.
*/

let numbers = [3,7,2,9,4,5];
let result = numbers.reduce((acc, val) => acc>val ? acc : val);
console.log(result);
