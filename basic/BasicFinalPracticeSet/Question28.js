/*
You said:
this is not me my small brother ask you this forgot it let's continue the coding practice
ChatGPT said:

Got it 👍 let’s get back to coding practice 🚀

Here’s the next slightly advanced practice problem for you:

📝 Question

Write a function that takes an array of numbers and returns both the maximum and minimum values in the array.
*/

function MAXandMIN(arr){
    let storeMinMax = [];
    let min = arr[0];
    let max = arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i] < min) min = arr[i];
        if(arr[i] > max) max = arr[i];
    }

    storeMinMax.push(max);
    storeMinMax.unshift(min);

    return storeMinMax;
}

function modernMinMaxApproach(arr){
    return [Math.min(...arr), Math.max(...arr)];
}

let numbers = [45, 2, 89, 23, 12];
let result = MAXandMIN(numbers);
console.log(result);

let modernResult = modernMinMaxApproach(numbers);
console.log(modernResult);