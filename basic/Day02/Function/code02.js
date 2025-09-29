
function guss(val){
    let age = 11;

    val();

    (function child(){
        console.log("This is child ");
    })
    
}


guss(function(){
    let a = 12;
    console.log("lllllllllllllllllllllllllllll");
    console.log("The value of a is : "+a);
})


