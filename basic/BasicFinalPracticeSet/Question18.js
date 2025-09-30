/*
Problem 2: Average of Array Elements

Description
Given an array of numbers, calculate and return the average of all elements.
*/

function averageArray(arr){
    let sum = arr.reduce((acc,num) => acc+num,0);
    let avg = sum/arr.length;
    return avg;
}
let arr = [3,3,3];
let result = averageArray(arr);

console.log(result);