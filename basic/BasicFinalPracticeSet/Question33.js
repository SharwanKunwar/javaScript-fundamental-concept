/*

Write a function findMax(arr) that takes an array of numbers and returns the maximum number.
*/

function findMax(arr){
    
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }
       
    }
    return max;
}


let numbers =  [10, 25, 5, 99, 42];
console.log(findMax(numbers));