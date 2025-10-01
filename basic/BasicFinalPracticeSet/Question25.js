/*
Problem 9: Print Only Even Numbers from an Array

Description:
Write a function that takes an array of integers and prints only the even numbers.

function printEvens(arr) {
    // your code here
}
*/

function printEvens(arr) {
    arr.filter((val)=>{
        if(val%2 === 0){
            console.log(val);
        }
    })
}

let numbers = [3,6,9,12,15];
printEvens(numbers);
