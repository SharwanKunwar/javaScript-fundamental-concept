/*
Problem 10: Sum of Array with Loop

Description:
Write a function to calculate the sum of all numbers in an array using a loop (without .reduce).
*/

let numbers = [1,2,3,4,5];
let sum = 0;
for(let i=0; i<numbers.length; i++){
    sum+= numbers[i];
}

console.log(sum);