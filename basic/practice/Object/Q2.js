let Resume = {
    name: "Sharwan jung kunwar",
    about: "I’m a BCA student passionate about full-stack development and problem-solving. I work with JavaScript, Java, C, Spring Boot, React, and PostgreSQL, and I enjoy building projects that sharpen my skills. My goal is to grow as a developer by solving challenges and creating impactful applications.",
    age: 22,
    address:{
        city: "kathmandu",
        country: "Nepal",
        details: {
            ward: 5,
            street: "main road",
            houseNumber: 123
        }
    },
    passion:{
        programming:{
            languages: ["c","java","javaScript"],
            framewords: ["React js","Next js","Spring Boot"],
            database: ["postgresql"]
        }
    },
    hobbies: ["playing guitar","playing Games","Expirment with code"]
}

// let {ward,street,houseNumber} = Resume.address.details;  // this is called destructuring

// console.log(ward,street,houseNumber)


// for(let key in Resume){
//     console.log(Resume[key]);

// }


//deep cloning

let wholeDetail = JSON.parse(JSON.stringify(Resume));
console.log(wholeDetail);