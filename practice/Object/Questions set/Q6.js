// What will happen if coordinates is missing ? how can you prevent errors?

const user = {
    name: "sharwan",
    skills: {
        programing:{
            languages:["c","java","javaScript"]
        }
    }
}

console.log(user?.skills?.programming?.languages[0]);
