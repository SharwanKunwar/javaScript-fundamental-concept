// You have an array of words:
// ["apple", "banana", "cat", "dog", "elephant"]

// Use map() to create new array where:
// * if the word has 5 or more letters, convert it to uppercase
// * if the word has less than 5 letters, convert it to lowercase


let words = ["Apple", "Banana", "Cat", "Dog", "Elephant"];

let newWords = words.map(function(item){
    if(item.length >= 5) return item.toUpperCase();
    else return item.toLowerCase();
})

console.log(newWords);