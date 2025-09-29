/*
Question 2 (Arrays)
👉 Create an array of numbers: [10, 20, 30, 40, 50]
Use a loop to calculate the sum of all numbers in the array.
Print the result.
*/

let cost = [10,20,30,40,50];
let result = cost.reduce((acc,val)=>acc+val,0);
console.log(result);

