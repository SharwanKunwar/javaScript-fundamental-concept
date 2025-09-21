// You have an array:
// numbers = [2,3,4]
// Use reduce() to calculate the product of all numbers.

let numbers = [2,3,4];
let product = numbers.reduce((acc, val) => acc*val,1);
console.log(product);