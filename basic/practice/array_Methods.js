

let arr1 = ["drug","good","care","love","home","girlfriend"];
arr1.pop();
console.log(arr1);

arr1.push("mom and dad");
console.log(arr1);

arr1.shift();
console.log(arr1);

arr1.unshift("compassion");
console.log(arr1);

let special = arr1.slice(0,3);
console.log(special);

arr1.splice(0,3);
console.log(arr1);

arr1.reverse();
console.log(arr1);

let hobbies = ["play games", "playing guitar","coding"];
let decendingOrder = hobbies.sort(function(a,b){
    return b-a;
})

console.log(decendingOrder);




















let age = [10,20,30,40,50];

let h = age.splice(0,3);
console.log(age);
console.log(h);

let hold = [1,2,3,4,5];
let newa = hold.slice(0,3);
console.log(newa);