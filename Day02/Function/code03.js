function calculate(dis){
    return function(price){
        let result = price - price*(dis/100);
        return result;
    }
}



let ten = calculate(10);
let twenty = calculate(20);

console.log(ten(1000));