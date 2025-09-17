//Wrtei a function applyOperation(arr, operation) that takes:
// * an array of numbers
// * an operation function (like double, square)


function applyOperation(arr, operation){
    return arr.map(operation);
}


let age = [10,20,30,40,50];

let double = applyOperation(age, function(val){
    return val*2;
})

let square = applyOperation(age, function(val){
    return val*val;
})


console.log(double);
console.log(square);