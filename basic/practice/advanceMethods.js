// map, filter, reduce, find, some, every


// map: it doesn't modify the original array gives us new array 
let age = [1,2,3,4,44,55,66,18,16];
let newAge = age.map(function(val,ind){
    // console.log(`index: ${ind} value: ${val}`);
    return 22;
})

console.log(newAge);
console.info(age);

// user filter and find the ages between 10 to 20 and return it into new array;
let newArr = age.filter(function(val){
    if(val > 10 && val < 20) return val;
})

console.log(newArr);
console.info(age);


//reduce : big array into one single value 
let sum = age.reduce(function(acc, val){
    return acc+val;
},0);

console.info(sum)

//calculate the sum of 5 multiplication table

let mult = [5,10,15,20,25,30,35,40,45,50];

let sum_mult = mult.reduce(function(acc, val){
    return acc+val;
},0);

console.info(sum_mult);
