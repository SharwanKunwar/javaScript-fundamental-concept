/*
Given an array of numbers, find the element that appears most frequently and how many times it appears.
*/

function mostFrequentElement(arr){
    let count = {};
    let maxCount = 0;
    let element = [];

    for(let val of arr){
        count[val] = (count[val] || 0)+1;
        if(count[val] > maxCount){
            maxCount = count[val];
        }
    }

    for(let key in count){
        if(count[key] === maxCount){
            element.push(Number(key));
        }
        
    }
    
    return {
        element,
        frequent: maxCount
    }
}

let num = [4,2,7,7,3,4];
let result = mostFrequentElement(num);
console.log(result);