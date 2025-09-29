/*
Question 7 (Objects + Arrays)

👉 You have an array of objects representing products:

const products = [
  { name: "Laptop", price: 50000 },
  { name: "Phone", price: 20000 },
  { name: "Tablet", price: 30000 }
];


Print the names of products that cost more than 25000.
*/

const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 20000 },
    { name: "Tablet", price: 30000 }
];

products.forEach(function(val){
    if(val.price > 25000){
        console.log(val.name);
    }
})