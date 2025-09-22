// You have an array:
// words = ["apple","banana","kiwi","strawberry","pear"];
// Use reduce() to find the longest word in the given array.

let words = ["apple","banana","kiwi","strawberry","pear"];
let longestWord = words.reduce((acc, item)=> {
    if(acc.length > item.length){
        return acc;
    }
    return item;
},"");

console.log(longestWord);

// short form:

let w = words.reduce((acc, word) => acc.length > word.length ? acc : word);
console.log(w);