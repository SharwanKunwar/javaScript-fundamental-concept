// Given a dynamic key let key = "age", how can you access user[key] ?

let key = "age";

const user={
    name: "sharwan",
    [key]: 22
}

console.log(user[key]);