// Destructure the key "first-name" as a variable called firstName.

const user = {
    "first-name": "mahakal"
}

let {"first-name": firstName} = user;

console.log(firstName);