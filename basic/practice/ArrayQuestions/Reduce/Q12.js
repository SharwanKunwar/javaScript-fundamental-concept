// You have an array:
// numbers = [10,20,30,40,50]
// Use reduce() to calculate the average.

let numbers = [10,20,30,40,50];
let sum = numbers.reduce((acc, num)=> acc+num,0);
let avg = sum/numbers.length;
console.log(avg);