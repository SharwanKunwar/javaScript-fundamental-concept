// You have an array:
// words = ["I", "love", "JavaScript"]
// Use reduce() to create a sinigle string by concatenating all words separated by a space.

let words = ["I", "love", "JavaScript"];
let newWords = words.reduce((acc, item)=>{
    return acc.concat(" "+ item);
})

console.log(newWords);

// also:
let InOne = words.reduce((acc, item)=> `${acc} ${item}`);
console.log(InOne);