function isEven(num){
    if(num%2===0){
        return true;
    }
    return false;
}


function printEvenNumbers(limit){
    for(let i=1; i<=limit; i++){
        if(isEven(i)){
            console.log(i);
        }
    }
}



printEvenNumbers(10);