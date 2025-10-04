/*
implement 36 : negative element in array
*/

// can you now write a fnction that finds the second smallest element in an array?

function find(arr){
    let second = Infinity;
    let min = Infinity;

    if(arr.length < 2){
        return "Array must have at lest two elements";
    }

    for(let i=0; i<arr.length; i++){
        if(arr[i] < min){
            second = min;
            min = arr[i];
        }
        if(arr[i] > min && arr[i] < second){
            second = arr[i];
        }
    }

    if(second === Infinity){
        return "No secondMinimum (may all equal)";
    }

    return {
        min,
        second
    }
}


let num = [-5, -10, 0, 3, -2];
let result = find(num);
console.log(result);