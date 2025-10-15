function tripletProduct(arr){
    
    let sortedArray = arr.sort((a,b)=>a-b);
    let maxProduct = sortedArray[arr.length-1] * sortedArray[arr.length-2] * sortedArray[arr.length-3];
    let minProduct = sortedArray[0] * sortedArray[1] * sortedArray[arr.length-1];

    let finalResult = Math.max(maxProduct, minProduct);
    return finalResult;

    

}

let myArr = [1,3,2,4,5];
let result = tripletProduct(myArr);
console.log("The max product is : "+result);