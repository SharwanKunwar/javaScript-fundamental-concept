/*
Second Largest Number in Array

Description:
Given an array of numbers, write a function to find the second largest number.
*/


function secondLargest(arr){
    let secondLargestElement = -Infinity;
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            secondLargestElement = max;
            max = arr[i];
        }else if(arr[i] > secondLargestElement && arr[i] < max){
            secondLargestElement = arr[i];
        }
    }
    return secondLargestElement;
}

let numbers = [11,2,33,4,57,50];

let result = secondLargest(numbers);
console.log(result);