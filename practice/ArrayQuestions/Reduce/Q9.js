// You have an array:
// numbers = [1,2,3,4,5,6,7];
// Use reduce() to calculate the sum of all odd numbers in the array.

let numbers = [1,2,3,4,5,6,7];
let sumOdd = numbers.reduce((acc, num) => num%2 == 1 ? acc+num : acc,0);
console.log(sumOdd);