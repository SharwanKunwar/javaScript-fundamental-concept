// Use object.entries to print all key-value pairs.

const user = {
    name: "sharwan",
    age: 22,
    city: "attriya"
}

console.log(Object.entries(user));

Object.entries(user).forEach(function(val){
    console.log(val[0] +":"+ val[1]);
})