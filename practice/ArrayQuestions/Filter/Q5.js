// You have an array 
// numbers = [4,11,16,7,20,9]
// Use the filter() method to create a new array that contains only the even numbers greater then 10.

let numbers = [4,11,16,7,20,9];
let newNumbers = numbers.filter((num)=>{
    if(num%2 == 0 && num > 10){
        return num;
    }
})

console.log(newNumbers);




// shorter form:
let demo = numbers.filter(item => item%2 === 0 && item > 10);
console.log(demo);