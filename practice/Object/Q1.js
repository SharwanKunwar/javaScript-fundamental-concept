let person = {
    name: "Sharwan",
    age: 20,
    profession: "Student",
    hobbies: ["Guitar", "Programming", "Boxing"]
};

console.log(person);
console.log(person.name); // Accessing a property
console.log(person.hobbies[1]); // Accessing an array inside the object


let obj = {...person};
console.log(obj);