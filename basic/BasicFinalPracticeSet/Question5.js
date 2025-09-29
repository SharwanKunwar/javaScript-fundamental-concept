/*
Question 5 (Objects + Loops)

👉 You have an array of objects representing people:

const people = [
    { name: "Alice", age: 22 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 25 }
];

Loop through the array and print the names of all people who are 18 or older.
This combines loops, objects, and conditionals.
*/

const people = [
    {name: "sharwan", age: 22},
    {name: "charlie", age: 25},
    {name: "parbesh", age: 23},
    {name: "ramit", age: 15},
    {name: "rohit", age: 18}
]

//solving using for loop
for(let i=0; i<people.length; i++){
    if(people[i].age >= 18){
        console.log(people[i].name);
    }
}


// solving using forEach
people.forEach(element => {
    if(element.age >= 18){
        console.log(element.name);
    }
});