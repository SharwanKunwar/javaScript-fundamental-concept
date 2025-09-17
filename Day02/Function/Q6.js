function secondLargest(arr){
    let start = -Infinity, end = -Infinity;

    for(let element of arr){
        if(element > start){
            end = start;
            start = element;
        }else if(element > end && element < start){
            end = element;
        }
    }
    return end;
}

let age = [10, 20, 19,99,40,50,22,45,51];

console.log(secondLargest(age));