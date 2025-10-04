// Write a function find(arr) and that finds the second largest and max number in the array.


function find(arr){
    let secondElement = -Infinity;
    let max = arr[0];
    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            secondElement = max;
            max = arr[i];
        }
        if(arr[i] > secondElement && arr[i] < max){
            secondElement = arr[i];
        }
    }
    return {
        secondElement,
        max
    }
}

let num = [10, 5, 20, 8, 15];
let result = find(num);
console.log(result);
