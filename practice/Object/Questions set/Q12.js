// How to preform deep clone in js

const user = {
    name: "sharwan",
    age: 22,
    city: "dhangadi",
    coordinate:{
        lat: 33.33,
        lug: 66.33
    }
}

let clone = JSON.parse(JSON.stringify(user));
console.log(clone);