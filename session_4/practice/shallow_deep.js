// primitive value store the variable name and value into the stack 

 
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
console.log(person);

// let arr = ['' , null , [], {} , 1 , 0].filter(Boolean)
// console.log(arr);




// questin - 2

const arr1 = [
  { id: 1 },
  { id: 2 }
];

const arr2 = arr1.slice();
// slice does not do deep copy it only does shallow copy

arr2[0].id = 99;

console.log(arr1[0].id); // 99 
console.log(arr2[0].id); // 99


// question - 3

const obj1 = {
  name: "JS",
  date: new Date(),
  greet: function() {
    return "Hello";
  }
};

const obj2 = JSON.parse(JSON.stringify(obj1));

console.log(typeof obj2.date); // string
console.log(typeof obj2.greet); // undefined


// at time of

//  json conversion it does not suupport the functions , undefined , symbol , date object , map , set , infinity , nan

// json only support the 
// string , number , boolean , null , array , plain object



const obj1 = {
  date: new Date(),
  nested: { a: 1 }
};

const obj2 = structuredClone(obj1);

console.log(obj1.date === obj2.date); // false
console.log(obj1.nested === obj2.nested); // fasle
console.log(obj2.date instanceof Date); // true

// Preserves Dates
// ✔ Preserves nested references
// ✔ Keeps object types
// ✔ Does true deep cloning
// ✔ Preserves circular references

// question - 5

class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return "Hi";
  }
}

const p1 = new Person("Alice");

const p2 = structuredClone(p1);

console.log(p2 instanceof Person); // false
console.log(typeof p2.greet); // undefined



// question - 6




const obj1 = {
  a: 1,
  nested: { x: 10 }
};

// it performs shallow copy 
const obj2 = Object.assign({}, obj1);

obj2.nested.x = 99;

console.log(obj1.nested.x); // 99



// question - 7 


const obj1 = {
  nested: { x: 10 }
};

const obj2 = { ...obj1 };

obj1.nested.x = 20;

obj1.nested = { x: 30 };

console.log(obj2.nested.x); // 20
