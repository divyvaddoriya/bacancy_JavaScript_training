// let and const are hoiseted but they are stored in different memory location so because of which it can not be accessed without giving declaration to them

// on other hand var is declared in global scope because of which it can be accessed during the hoisting phase 

// it will show x is not defined 
console.log(x);


// it will show undefined
console.log(b) 

// it will give reference error , it will show cannot access it before initialization 
console.log(a);

let a = 10; 
var b = 5;

// temporal dead zone 
// time between the let and consts are declaration and initialization is called the temporal dead zone 


// this will give type error
// type error means it cannot be performed
const c = 100 
c = 54

// this will give syntax error 
// let d = 100;
// let d = 5 ;
