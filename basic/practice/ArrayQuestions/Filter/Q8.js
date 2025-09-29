// You have an array:
// numbers = [2,3,5,8,10,13];
// Use filter() to create a new array that contains numbers divisible by 2 or 5.

let numbers = [2,3,5,8,10,13];
let newNumbers = numbers.filter(num => num%2 === 0 || num%5 === 0);
console.log(newNumbers);