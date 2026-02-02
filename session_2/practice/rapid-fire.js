console.log(typeof NaN); // number

console.log(Object.is(NaN, NaN)); // true
console.log(NaN === NaN); // false
// elf-Comparison: Since NaN is the only value in JavaScript not equal to itself, x !== x will only be true if x is NaN.

console.log(0 === -0); // true
console.log(Object.is(0 , -0)); // false
// Object.is() it does not convert the values into different values does not do type coersion 


// js compare object by reference so it will always be false
console.log([] === []); // false


console.log("5" == 5); // true
console.log("5" === 5); // false


console.log(typeof function() {}); // function 
console.log(typeof class A {}); // function 


function test() {

// , if you put a line break immediately after the return keyword, the engine assumes you wanted to terminate the statement there. It "helpfully" inserts a semicolon for you
  
return
  {
    name: "JS"
  };
}


console.log(test());// undefined

console.log([] instanceof Object); // true
console.log([] instanceof Array); // true


console.log(Object.getPrototypeOf([]) === Array.prototype); // true

console.log(Object.getPrototypeOf(Array.prototype) === Object.prototype); // true

console.log(Object.getPrototypeOf(Object.prototype) === null); // true


// non empty string is true 
// empty string is false
console.log(Boolean("false")); // true
console.log(Boolean("0")); // true
console.log(Boolean(" ")); // true
console.log(Boolean("")); // false

console.log(typeof null); // 0bject


console.log(!!"0"); // true

console.log(1 < 2 < 3); // true
//  true < 3 -- 1 < 3 

console.log(3 > 2 > 1); // false
// true > 1 -- 1 > 1 false






//     Function
//        ↓
// Function.prototype
//        ↓
// Object.prototype
//        ↓
//       null

console.log(Object instanceof Function); //true

console.log(Function instanceof Function) // true

console.log(Function instanceof Object )   // true 

console.log(Object instanceof Function  ); // true


console.log (Object instanceof Object) // true);

// All functions inherit from Function.prototype.
// All objects inherit from Object.prototype.
// All prototype chains end at null.


console.log(typeof Number); // function 
console.log(typeof undefined); // undefined 
console.log(typeof null); // object
console.log(typeof typeof NaN ); // string
console.log(typeof typeof 1 ); // string
console.log(typeof typeof Boolean ); // string


console.log(typeof Symbol); // function 
console.log(typeof Symbol("helo")); // symbol
console.log(typeof Symbol("helo") == "symbol"); // true

// typeof always return lowercase string