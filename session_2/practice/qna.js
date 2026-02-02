// // question - 1

// console.log(typeof null); //  in old js bug that shows null (primitive value) legacy bug
// console.log(typeof undefined); //undeifned


// //  ==  it perform the type coersion before comparison 
// //  === it does strict comparison withour coersion 
// console.log(null == undefined); //truw
// console.log(null === undefined); //false


// //  question - 2

// // falsy value in js 

// // false
// // 0
// // -0
// // 0n
// // ""
// // null
// // undefined
// // NaN


// if ("0") {
//   console.log("A");
// }
// // here is is non empty string so it is truthy value

// if (0) {
//   console.log("B");
// }
// // 0 is falsy value 


// if ([]) {
//   console.log("C");
// }
// // all object are truthy in nature so it will not convert to the string for comparison

// if ([] == false) {
//   console.log("D");
// }
// // how comparion here will hapen   
// // [] = "" then it means now we have "" == false ,
// //  false = 0 , false will convert to the 0 , //  so now we have "" == 0
// // "" = 0 , it will convert to the 0 == 0 
// //  so now because of this it will print D 

// //  question - 3

// let a = 10;

// // generally assign ment statement are true
// // but when u assign the falsy value , like 0 , false, nan etc .. it will return false so be carefully
// if (a == [] ) {
//   console.log("X");
// } else { 
//   console.log("Y"); // will print this
// }

// console.log(a);

// //  question - 4

// // && - return the first falsy value , last if none are falsy 
// console.log(1 && 2);
// console.log(0 && 5);

// // returns the first truthy value , if no truthy found return the last one
// console.log(1 || 0);
// console.log("" || 0 || false);
// console.log("" || "Hello");


// //  only check for null or undefined , if they are null or undeifned it will go to right print 
// // it useful in real project where u want to preserve the 0 , false , "" 
// console.log(null ?? "Default");
// console.log(false ?? "Fallback");


// //  question - 5

// // default parameter only kick in when argument is undefined , so if it is not then the passed parameter will work as said 
// function test(a, b = a * 2) {
//   console.log(a, b);
// }

// test(5); // 5 , 10 
// test(5, undefined); //  5 , 10 
// test(5, null); // 5 , null

// // deafult parameter only get activate for undefined 
// //  not for the 
//         //  null

//         // 0

//         // false

//         // ""




// //  question - 6 




// // var x inside the function is hoisted.

// // It creates a local binding.

// // That local binding shadows the global variable.

// // During first console.log, the local variable exists but is uninitialized → undefined.


// console.log(x); // undefined

// var x = 10;

// function demo() {
//   console.log(x); // undefined
//   var x = 20; // 
//   console.log(x); // 20
// }

// // demo();

// console.log(x); // 10



// // question - 7


// // The TDZ is:

// // The time between entering scope and the line where the variable is initialized.

// // The variable exists

// // But accessing it throws a ReferenceError

// // let x = 10;

// function test1() {
//   console.log(x); // will show error reference error cannot use x before initializing it
//   let x = 20;
// }

// // test();



// //  question - 8 

// // The outer function has finished execution, but its variables are not garbage collected because inner still references them.
// // Why fn1 and fn2 Behave Differently

// // Because:

// // Each call to outer() creates a new lexical environment.

// // Each returned function closes over its own separate count.

// // They do NOT share state.

// // A closure is a function that remembers and has access to variables from its lexical scope even after the outer function has finished execution.

// function outer() {
//   let count = 0;

//   return function inner() {
//     count++;
//     console.log(count);
//   };
// }

// const fn1 = outer();
// fn1(); // 1 
// fn1(); // 2

// const fn2 = outer();
// fn2(); // 1



// // question - 9 



// // Rule: + Operator With Objects

// // When using +:

// // Objects are converted using ToPrimitive.

// // Default hint for + is "default".

// // For arrays and objects:

// // valueOf() is tried first

// // If it returns object → fallback to toString()

// // Unary + forces numeric conversion.

// console.log([] + []); // ""

// // [].valueOf() → []
// // [].toString() → ""

// // "" + ""


// console.log([] + {}); //"[object Object]"

// // {} → "[object Object]"


// console.log({} + []); // 0 
 
// // ({} + []) if wrapped in paranthesses 
// // "[object Object]"


// // {}      // empty block
// // + []    // unary + applied to []
// // [] → ""
// // "" → Number("") → 0


// console.log({} + {});

// // "[ object object ] [ object object ]"



// //  question - 10



// console.log(true + false); // 1

// console.log(true + "1"); // true1 
// //  if one is string concatetion happen if we have + 

// console.log("5" - 3); // 2
// //  - forces the string to convert ot number

// console.log("5" + 3); // 53

// console.log([] == ![]); // true

// // ![] → false   -    [] == false
// // false → 0   - []  == 0
// //  [] → ""   -  "" == 0
// // "" -> 0   - 0 == 0 


// //  quuestion 11


// // Because == does NOT compare values directly.

// // It follows a coercion tree:

// // Boolean → Number
// // String → Number (if compared with number)
// // Object → ToPrimitive


// // '0' -> 0 in comparison with number string convert to the number

// console.log(0 == '0'); // true 

// console.log(0 == ''); // true
 
// console.log('0' == ''); // false
// // here both are string no coersion 

// console.log(false == '0'); // true

// console.log(false == ''); // true





// // question - 12 




// console.log([] == ![]); // true


// // When both operands are objects, == compares references — NOT contents.

// // When both operands are objects:
// // == does NOT trigger coercion


// console.log([] == []);  // false

// console.log({} == {});  // false




// // question - 13 

// // [] - ""
// // {} - [object object]

// console.log(+[]);     // 0
// console.log(+{});     // NaN
// console.log([] + 1);  // "1"
// console.log({} + 1);  // [object object]1    (when run standalone)



// // question - 14 

// // Operator	Behavior
// // +	Can concatenate if string involved
// // -	Always numeric conversion
// // *	Always numeric
// // /	Always numeric

// console.log([1] + [2]);        // "12"
// console.log([1,2] + [3,4]);    // "1,23,4"
// console.log([1] - [2]);        // -1

// console.log([1,2] - [3,4]);    // NaN
// // Number("1,2") → NaN
// // Number("3,4") → NaN



// // question - 15



// // What is String(null) inside array join?

// // Actually:

// // null becomes "" (empty string)

// // undefined becomes ""

// // [null].toString()      → ""
// // [undefined].toString() → ""


// console.log([null] + [undefined]);   // ""
// console.log([null] - [undefined]);   // 0

// console.log(null + undefined);       // NaN
// // this is direct no array involved without array this happen 
// // null → 0
// // undefined → NaN

// console.log(null - undefined);       // NaN




// // this keyword 

// // question - 16 

// const obj = {
//   name: "JS",
//   greet: function () {
//     console.log(this.name);
//   }
// };

// const fn = obj.greet;
// fn();

// // undefined 

// // cause function give output based on how it is called
// //  u can stop it how 

// //  1  bind 

// // const fn = obj.greet.bind(obj);
// // fn(); // JS


// // 2 call

// // fn.call(obj);

// // 3 wrap in arrow

// // const fn = () => obj.greet();
// // fn();


// // question - 17 

// const obj = {
//   name: "JS",
//   greet: () => {
//     console.log(this.name);
//   }
// };

// obj.greet();


// // Key rule:

// // Arrow functions do NOT have their own this.
// // // 
// // They do not bind this dynamically
// // Arrow functions capture this lexically from their surrounding scope.



// // queston - 18

// const Person = (name) => {
//   this.name = name;
// };

// const p = new Person("John");

// // TypeError: Person is not a constructor
// // Arrow functions do NOT have a [[Construct]] internal method.

// // They cannot be called with new

// // They do not have a prototype

// // They do not create their own this


// // question - 19

// const obj1 = {
//   name: "JS",
//   greet: function () {
//     return function () {
//       console.log(this.name);
//     };
//   }
// };

// const func = obj1.greet();
// func(); // undefined
// func.call(obj1); // js


// // how to make it remember the scope 

// // 1 way

// // greet: function () {
// //   const self = this;
// //   return function () {
// //     console.log(self.name);
// //   };
// // }


// //  2 way 

// // greet: function () {
// //   return () => {
// //     console.log(this.name);
// //   };
// // }


// // question - 20 

// console.log("A");

// setTimeout(() => console.log("B"), 0);

// Promise.resolve().then(() => console.log("C"));

// console.log("D");

// // Promise .then() callbacks are microtasks. The event loop drains the entire microtask queue before moving to macrotasks. Chained .then() callbacks are queued sequentially as each promise resolves, but still execute before any macrotask like setTimeout.


// question - 21

// function Person(name) {
//   this.name = name;
// }

// const obj = { name: "Outer" };

// const BoundPerson = Person.bind(obj);

// const p = new BoundPerson("John");

// console.log(p.name); // john
// console.log(obj.name); //outer

// When a bound function is used with new, the thisArg provided to bind is ignored.

// Instead:

// A new empty object is created.

// That object becomes this.

// It links to Person.prototype.

// Constructor runs.
// const p = new Person("John");



// question - 22

function Person(name) {
  this.name = name;
}

const BoundPerson = Person.bind(null, "Preset");

// person.bind(boundthis , boundArguments)
// This is the critical nuance.

// Arguments passed during bind() are prepended to arguments passed during call.

// So internally this becomes:

// When a bound function is used with new:

// Bound this is ignored.

// Bound arguments are preserved.

// A new object is created and linked to the original prototype.

// That’s a strong answer.

// const p = new BoundPerson("Ignored");

// console.log(p.name);


// // question - 22

// function Person(name) {
//   this.name = name;
// }

// Person.prototype.sayHi = function () {
//   return "Hi " + this.name;
// };

// const p1 = new Person("Alice");

// console.log(p1.sayHi()); // hi alice 

// console.log(p1.__proto__ === Person.prototype); // true

// console.log(Person.prototype.__proto__ === Object.prototype); // true

// console.log(Object.prototype.__proto__); // null

// Check p1 itself → no sayHi

// Check p1.__proto__ → equals Person.prototype

// Person.prototype has sayHi

// Execute with this = p1


// question - 23

function Person1(name) {
  this.name = name;
}

const p1 = new Person1("Alice");

Person1.prototype.sayHi = function () {
  return "Hi";
};

// This modifies the existing prototype object.

// Important:

// We are not replacing the prototype.

// We are adding a property to the same object.

// So both p1 and future instances see sayHi.

const p2 = new Person1("Bob");

Person1.prototype = {
  sayHello() {
    return "Hello";
  }
};

// his creates a completely new object and assigns it to Person.prototype.

// Old prototype object → still referenced by p1 and p2
// New prototype object → used for future instances

const p3 = new Person1("Charlie");

console.log(p1.sayHi); // [Function (anonymous)]
console.log(p2.sayHi); // [Function (anonymous)]
console.log(p3.sayHi); // undefined
console.log(p3.sayHello()); // hello
console.log(p1.sayHi()); // Hi
console.log(p1.sayHello()); // error not defined 


// Modifying (Person.prototype.method = ...) affects all existing and future instances.

// Replacing (Person.prototype = {...}) affects only future instances.

// Existing instances retain reference to the old prototype object.




// question - 25




function Person(name) {
  this.name = name;
}

// whenever u create the new constructor function it creates
// Person.prototype = {
//   constructor: Person
// }


Person.prototype = {
  sayHi() {
    return "Hi";
  }
};
// this will replace the constructor property and now p.consstructor will go to Person it will not find constructor there so it will go to upper and theire it will find Object

const p = new Person("Alice");

console.log(p.constructor === Person); // fasle
console.log(p.constructor === Object); // true

