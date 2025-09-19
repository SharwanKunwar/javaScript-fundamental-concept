// push : adds elements to the end of an array

let arr = [1,2,3,4];
arr.push(5);

console.log(arr);


//pop : Removes the last element from the array.

let age = [20,30,40];
age.pop();

console.log(age);

// shift() : Removes the first element form the array.
let box01 = [1,2,3,4];
box01.shift();
console.log(box01);


//unshift() : adds elements to the beginning
let box02 = [1,2,3,4,5];
box02.unshift(77);
console.log(box02);

//splice() : add/remove items at a specific index from the array (it modifies the real/original array)
let box03 = [1,2,3,4,5];
box03.splice(0,3);
console.log(box03);


//slice() : create a copy ( doesn't change original | it doesn't change the original array);
let box11 = [1,2,3,4,5];
let newArray = box11.slice(0,3);   // It doesn't include 3 basically it goes to n-1 like in this case 3 means 3-1 = 2 elements
console.log(newArray);
console.log(box11);


// Reverse() : it revers the given array
let price = [1,2,3,4,5];
price.reverse();
console.log(price);


// sort : it sort the array accending or deaccending order | two way to do the work

//method 1: This will sort only accending order
let room = [1,4,3,5,2];
room.sort();
console.log("Rooms number : "+room);

//method 2: This will sort accending and decending order according to us like this
let hotel_room = [2,3,1,6,5,4];
hotel_room.sort(function(a,b){
// return a-b; // for accending order
return b-a; // for decending order
})
console.log("This is hotel room: "+hotel_room);






