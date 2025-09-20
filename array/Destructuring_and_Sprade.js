// Destructuring and sprade operator

// * Destructuring is the process where we extract or copy the element of array into the variable like

let variable_value = [1,2,3,4,5];
let [a,b, ,c] = variable_value;

console.log(a,b,c);

// * Example:
// suppose you have a option to get a car you love the most 
// now you have to select one car and store it into the variable if you does then that car is yours

let Cars = ["supra mk4", "alto","BMW","Lambo"];
let [Fev] = Cars;
console.log(Fev);


// Now select and store any car if you doese then you know what happen
let [car1, ,car2,car3] = Cars;
console.info(car1,car2,car3);

// agin one task remain you have to seprate the cars according to there nature : super Car and normal Car
let [superCar1,normalCar1,superCar2,superCar3] = Cars;
console.info(superCar1,normalCar1,superCar2,superCar3);



///////////////
// sprade operator : sprade operator give us the power to copy the array into new array and if we make changes to the copyed array it doesn't effect original one 
//like 

let ages = [22,33,44,55];
let newAges = [...ages];
console.log(newAges);
newAges[0] = 55;
console.info("new array: "+newAges);
console.info("old array : "+ages);
