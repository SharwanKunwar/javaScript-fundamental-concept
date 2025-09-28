// copy the object in other object

const user = {
    name: "sharwan",
    age: 11,
    city: "Tikapur",
    coordinate:{
        lat: 22.4,
        lug: 33.33
    }
}

let clone = {...user};
console.log(clone);