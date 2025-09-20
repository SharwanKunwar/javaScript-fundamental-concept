// You have an array with numbers and strings:
// items = [5, "hello", 12, "world", 3]

// Use map() to create a new array where:
// * if the item is a number, square it (multiply it by itself)
// * if the item is a string, reverse the string

let items = [5, "hello", 12, "world", 3];

let newItems = items.map(function(item){
    if(typeof(item) === "number") return item*item;
    else if(typeof(item) === "string") return item.split("").reverse().join("");
})

console.log(newItems);