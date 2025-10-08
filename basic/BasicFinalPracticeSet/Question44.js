/*
Title: Generate Fibonacci Sequence
Difficulty: Medium
Description:
Given an integer n, return the first n numbers in the Fibonacci sequence.
*/

function fib(n){
    if(n === 0) return 0;
    if(n === 1) return 1;
    return fib(n-1)+fib(n-2);
}

let n = 10;

for(let i=0; i<n; i++){
    console.log(fib(i));
}