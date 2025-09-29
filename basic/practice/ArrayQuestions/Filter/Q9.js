// You have an array:
// words = ["cat", "dog", "kiwi", "apple", "pig"];
// Use filter() to create a new array that ecledes all words containing the letter "i".


let words = ["cat", "dog", "kiwi", "apple", "pig"];
let newWords = words.filter(item => !item.includes("i"));

console.log(newWords);
