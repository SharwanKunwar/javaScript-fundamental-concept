// Problem 4: Find Maximum Number
// Given an array of numbers, return the largest number in the array.
// let numbers = [123,33,3,43,87];


function findMax(arr){
    let max = arr.reduce((acc,num) => acc > num ? acc : num);
    return max;
}


let numbers = [123,33,3,43,87];
let result = findMax(numbers);
console.log(result);