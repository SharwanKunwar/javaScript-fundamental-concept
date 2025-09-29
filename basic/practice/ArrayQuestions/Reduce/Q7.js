// You have an array of array:
// arrays = [[1,2], [3,4], [5,6]]
// Use reduce() to create a single flattened array.

let arrays = [[1,2], [3,4], [5,6]];
let singleArray = arrays.reduce((acc, array)=>{
    return acc.concat(...array);
})

console.log(singleArray);