// primitive value store the variable name and value into the stack 

import { json } from "body-parser";

 
// non primitive 


// stack ( prmimitve ) and heap memory ( non - primitive ) 

let name = "divy"
let secondname = name
secondname = "ayush"

// in primitive it will create deep copy so change in one will not affect change in another 

// in stack every variable has value and in 

console.log(secondname);
console.log(name);

// in heap memory if we do copy of the non primitive value it will give us reference of the value 

let user = {
    name: "divy",
    social: { twitter: "@divy" } // Nested object
};

// here this will create shallow copy and only will copy the reference of the object 
let secondUser = user
// secondUser.name= "ayush"

// this will create the deep copy of the user but it will only be for the first value too  

let thirdUser = {...user}

// this wil not affect the original value  
thirdUser.name = "dhruv"

// but this will affect the original user value cause in spread operator it only deep copy the level one primitive value but all the non primitve value will be only stored as reference in it  
thirdUser.social.twitter = "@new"


// console.log(user);
// console.log(secondUser);
// console.log(thirdUser);


// how to create deep copy in java script 


// old method
let deepCopy = JSON.parse(JSON.stringify(user))

// new method
let structuredDeepCopy = structuredClone(user)




// circular reference 

let person = { name: "Divy" };

// Direct circular reference
person.self = person;
// console.log(person);

let arr = ['' , null , [], {} , 1 , 0].filter(Boolean)
console.log(arr);

