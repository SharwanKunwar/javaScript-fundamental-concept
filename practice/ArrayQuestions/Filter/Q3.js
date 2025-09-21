// You have an array:
// numbers = [3,5,9,12,14,18];
// Use the filter() method to create a new array that contains only the number that are multiples of 3.

let numbers = [3,5,9,12,14,18];
let newNumbers = numbers.filter(num => num%3 == 0);

console.log(newNumbers);