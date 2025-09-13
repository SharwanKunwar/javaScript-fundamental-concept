function Check(user, computer){
    if(user === computer) return "Draw";
    else if(user === "paper" && computer === "rock") return "user";
    else if(user === "rock" && computer === "scissor") return "user";
    else if(user === "scissor" && computer === "paper") return "user";
    else return "computer";
}

let user = "paper";            //------------> you can change to see different results
let computer = "rock";        //------------> you can change to see different results

let result = Check(user, computer);
console.log("The winner is: "+result);