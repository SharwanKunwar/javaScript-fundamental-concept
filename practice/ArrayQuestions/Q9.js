// You have an array of worlds:
// worlds = ["apple", "banana", "kiwi"]

// Use the map() method to create a new array that contains the length of each word.


let words = ["apple", "banana", "kiwi"];
let newWords = words.map(function(item){
    return item.length;
})

console.log(newWords);