//Write a function removeDuplicates(arr) that takes an array of numbers (or strings) and returns a new array with duplicates removed.

function removeDuplicates(arr){
return [...new Set([...arr])];
}
function method2(arr){
    let uniqueNumbers = [];
    for(let i=0; i<arr.length; i++){
        if(!uniqueNumbers.includes(arr[i])){
            uniqueNumbers.push(arr[i]);
        }
    }
    return uniqueNumbers;
}

let numbers = [1,2,2,3,3,4,5,6,6];
let result = removeDuplicates(numbers);
console.log(result);