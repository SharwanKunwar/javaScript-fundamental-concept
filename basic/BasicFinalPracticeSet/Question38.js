/*
Description:
Write a function that counts how many times each element appears in an array.
Return the result as an object where the key is the element and the value is the count.
*/

function count(arr){
    let newArr = {};
    for(let val of arr){
        newArr[val] = (newArr[val] || 0)+1;
    }
    return newArr;
}

let num = [1,2,2,2,5];
let result = count(num);
console.log(result);