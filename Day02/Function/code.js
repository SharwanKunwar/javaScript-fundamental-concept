// function cal(...so){
//     let sum = 0;

//     so.map((item, index)=>{
//         sum+=item;    
//     })
//     return sum;
// }

// let hold = cal(1,2,3,4,5);



////////////////////////////


// function cal(...so){
//     let sum = 0;

//     for(let i=0; i<so.length; i++){
//         sum+=so[i];    
//     }

//     return sum;
// }

// let hold = cal(1,2,3,4,5);

// console.log(hold);


  
//////////////////////////////////


function getage(...age){
    let sum = 0;

    age.forEach(function(val){
        sum +=val;
    })
    console.log("the sum of all age is : "+sum);
}


getage(20,20,20);
