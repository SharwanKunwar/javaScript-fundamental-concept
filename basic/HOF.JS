function calculate_discount(dis){
    return function(price){
        return price-price*(dis/100);
    }
}

let ten = calculate_discount(10);
let twenty = calculate_discount(20);

console.log(ten(1000));
console.log(twenty(1000));