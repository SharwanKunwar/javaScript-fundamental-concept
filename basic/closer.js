function showAge(val){
    let age = val+18;
    return function(){
        age++;
        console.log("Your incremented age is : "+age);
    }

}


let age = 2;

let hold = showAge(age);
hold();
hold();