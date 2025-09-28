// Destructure the city and lat from the locations object below

const locations = {
    city: "attriya",
    ward: 1,
    coordinates:{
        lat: 22.4,
        lng: 66.3
    }
}

let {city} = locations;
let {lat} = locations?.coordinates;
console.log(city);
console.log(lat);