/*
👉 You have an array of numbers:

let nums = [2, 4, 6, 8, 10];
Write a program to calculate and print the average of all numbers in the array.
*/

let nums = [2, 4, 6, 8, 10];

let sum = nums.reduce((acc, num) => acc+num,0);
let avg = sum/nums.length;
console.log(avg);