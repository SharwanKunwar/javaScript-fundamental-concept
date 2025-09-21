// You hava an array of names:
// names: ["sharwan", "parbesh", "roshan"];

// Use the map() method to create a new array where the first letter of each name is capitalized.

let names = ["sharwan", "parbesh", "roshan"];

let newNames = names.map(function(name){
    return name.charAt(0).toUpperCase() + name.slice(1);
})

console.log(newNames);

