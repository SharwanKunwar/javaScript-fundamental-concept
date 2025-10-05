// Write a function capitalizeWords(str) that takes a sentence and capitalizes the first letter of each word.

function capitalizeWords(str){
    let StringArr = str.split(' ');
    let capString = StringArr.map((word, index)=>{
        return word[0].toUpperCase() + word.slice(1);
    }).join(" ");
    return capString;
}

let sentence = "hello world this is the game";
let result = capitalizeWords(sentence);
console.log(result);