/*
Most Frequent Element in an Array

Description:
Write a function that finds the element that appears most frequently in an array.
*/

function mostFrequent(arr){
    let unique = new Set(arr);
    let maxcount = 0;
    let mostFrequentElement = null;

    for(let val of unique){
        let count = arr.filter((x) => x === val).length;
        if(count > maxcount){
            maxcount = count;
            mostFrequentElement = val;
        }
    }
    return mostFrequentElement;
}

let input = [1,2,2,3,3,3,4,5];
let result = mostFrequent(input);
console.log(result);