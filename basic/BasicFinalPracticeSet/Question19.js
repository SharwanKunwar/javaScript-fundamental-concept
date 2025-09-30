/*
Problem 3: Add & Remove Elements

Description:
Given an array, add a number at the end and remove the first element. Return the updated array.
*/

function addRemove(arr, numToAdd) {
    arr.push(numToAdd);
    arr.shift();
    return arr;
}

let arr = [1,2,3,4];
let result = addRemove(arr,66);
console.log(result);