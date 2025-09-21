// You have an array of names:
// names = ["apple", "banana", "kiwi"]

// Use the map() method to create a new array where each name has it index appended at the end.


let names = ["box", "book", "pen"];
let newNames = names.map((item, index)=>{
    return item.concat(index);
})

console.log(newNames);