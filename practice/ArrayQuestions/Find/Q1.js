// You have an array:
// num = [1,3,7,8,10,13]
// Use find() to return to return the first even number.

let numbers = [1,3,7,8,10,13];

let firstEven = numbers.find(val => val%2 === 0);

console.log(firstEven);