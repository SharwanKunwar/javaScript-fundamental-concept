let age = [1,2,3,4,5];

age.forEach(function(val){
    console.log(val+1);
    
});



// map : It is used when you have to make a new array basice of old array. whenever you incounter map make a blank array in you mind. it take function.
let arr1 = [1,2,3,4,5];
let newArray = arr1.map(function(val){
    return 88;
})

console.log(arr1);
console.log(newArray);


let price = [1,2,3,4,5];
let newPrice = price.map(function(val){
    if(val > 3) return val;
    else return "Empty";
})

console.log(newPrice);




//Filter : it is same as map or forEach. if the condition is true it will create new array containing condition true element.
let rool = [1,2,3,4,5];
let newRoll = rool.filter(function(val){
    if(val > 3) return true;
    else return false;
})

console.log(newRoll);

//Reduce : it it the process where you can convert a big array into a compact one or you can say single value like
// suppose you have a array containing a list of price and you have to calculate the sum now the reduce comes in picture.
let exp_price = [10,20,30,40,50];
let newExp_price = exp_price.reduce(function(acc,val){
    return acc+val;
},0);

console.log(newExp_price);


let home = [10,2,3];
let newHome = home.reduce(function(acc, val){
    return acc*val;
},1);

console.log(newHome);


//find : find a girl who say i love you

let gf = [
    {girl: "rima", say: "hi"},
    {girl: "sima", say: "i love you"},
    {girl: "rita", say: "i love you"},
    {girl: "sita", say: "i hate you"}
]

let MyGf = gf.find(function(who){
    if(who.say === "i love you") return who.girl;
})

console.log(MyGf);


// some : it checks the condition if matched return true else false

let boysMarks = [10,40,35,60,70];
let fail = boysMarks.some(function(val){
    if(val < 33) return val;
})

console.log(fail);


//every : it is use to check all element satisfies the conditon or not if yes it will return true else false
let makrs = [30,35,40,55,50,90];
let result = makrs.every(function(val){
    if(val > 33) return val;
})

console.log(result);