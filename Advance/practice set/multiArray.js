function nestedArray(arr){
    let newArray = [];
    
    for(let val of arr){
        if(Array.isArray(val)){
            newArray = newArray.concat(nestedArray(val));
        }else{
            newArray.push(val);
        }
    }
    return newArray;

}

let myArr = [1,2,[3,4],5,6,7,[8,9,10],11,12];
let result = nestedArray(myArr);
console.log(result);