// can you now write a fnction that finds the second smallest element in an array?

function find(arr){
    let second = Infinity;
    let min = Infinity;

    for(let i=0; i<arr.length; i++){
        if(arr[i] < min){
            second = min;
            min = arr[i];
        }
        if(arr[i] > min && arr[i] < second){
            second = arr[i];
        }
    }
    return {
        second,
        min
    }
}


let num = [1,2,3,4,5];
let result = find(num);
console.log(result);