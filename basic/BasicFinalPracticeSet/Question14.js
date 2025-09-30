/*
👉 Create an object person with properties:
name
age
Write a program that checks the person’s age:
If age is 18 or older, print "Alice is an adult"
Otherwise, print "Alice is a minor"
*/

const person = {
    name: "Sharwan",
    age: 22
}

if(person.age >= 18){
    console.log(`${person.name} is an adult`);
}else{
    console.log(`${person.name} is an minor`);
}