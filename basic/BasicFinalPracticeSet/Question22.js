/*Problem 6: Print Object Keys & Values

Description:
Given a student object, print all its keys and values.

Example:

Input: { name: "Alice", age: 22, grade: "A", city: "Kathmandu" }

Output: 
name Alice
age 22
grade A
city Kathmandu
*/

function printObject(obj) {
    for(let key in obj){
        console.log(`${key}: ${obj[key]}`);
    }
}

let student = {
    name: "mahakal",
    age: 22,
    grade: "A",
    city: "kathmandu"
}

printObject(student);
