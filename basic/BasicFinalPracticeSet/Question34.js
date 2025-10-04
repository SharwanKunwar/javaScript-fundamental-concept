//Write a function findMinAndMax(arr) that returns both the minimum and maximum number in the array as an object.

function minMax(arr){
    let min = arr[0];
    let max = arr[0];

    for(let i=0; i<arr.length; i++){
        if(arr[i] > max){
            max = arr[i];
        }else if(arr[i] < min){
            min = arr[i];
        }
    }

    return {
        min,
        max
    }
}
let num = [15,8,3,55,2];
console.log(minMax(num));