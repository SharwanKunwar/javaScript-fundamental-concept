// Randomly chose any three number and calculate the product of them.

function maxProduct(arr){

    let uniqueIndex = new Set();
    let product = 1;
    
    let i = 0;
    while(i<arr.length){
        uniqueIndex.add(Math.floor(Math.random() * (arr.length - 1)) + 1);
        i++;
    }

    let valueForCal = [...uniqueIndex].slice(0,3);
    
    for(let i=0; i<valueForCal.length; i++){
        product *= arr[valueForCal[i]];
    }
    return product;
    
    
}

let myArr = [1,2,3,4,5];
let result = maxProduct(myArr);
console.log("The max product is : "+result);